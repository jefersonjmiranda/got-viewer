import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', 'image-viewer.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('selectSeason') selectSeason: MatSelect;
  @ViewChild('selectEpisode') selectEpisode: MatSelect;

  temporada = new FormControl('');
  temporadaList: number[] = [];
  episodio = new FormControl('');
  episodesListList: any[] = [];
  episodesList: string[] = [];

  selectedSeason = 1;
  selectedEpisode = 1;
  selectedEpisodeData;
  currentDescription = '';

  episodes;
  characters;

  totalSeconds = 0;
  timeString = '0:00:00';
  episodeStart = 0;
  episodeLength = 5400;
  sceneTimeSecs = []
  sceneSegments = [];

  charBio = [];
  clickSelected = 1;
  sceneData = {
    number: 1,
    characters: '',
    location: '',
    sublocation: '',
    start: '',
    end: ''
  }

  debugText = '';

  locationsData = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.readFiles();
  }

  ngAfterViewInit(): void {
    this.setupMap();
  }

  async readFiles() {
    this.readEpisodes();
  }

  readEpisodes() {
    this.http.get('assets/episodes.json').subscribe(data => {
      this.episodes = data['episodes'];
      console.debug(this.episodes);
      this.readCharacters();
    });
  }

  readCharacters() {
    this.http.get('assets/characters.json').subscribe(data => {
      this.characters = data['characters'];
      console.debug(this.characters);
      this.readLocations();
    });
  }

  readLocations() {
    this.http.get('assets/locations.csv', {responseType: 'text'}).subscribe(
      data => {
        const resultData = [];
        const lines = data.split("\n") || [];
        const params = lines[0].split(",");
        if (lines.length>1) {
          for (let i=1; i<lines.length; i++) {
            const lineObj = {};
            const values = lines[i].split(",");
            for (let j=0; j<values.length; j++) {
              lineObj[params[j]] = values[j]
            }
            resultData.push(lineObj);
          }
        }
        console.debug('locations', resultData);
        this.locationsData = resultData;
        this.init();
      },
      error => {
        console.debug(error);
      }
    );
  }

  init() {
    let eps;
    this.episodes.forEach(ep => {
      if (!this.temporadaList.includes(ep.seasonNum)) {
        this.temporadaList.push(ep.seasonNum);
        eps = [ep.episodeNum + ': ' + ep.episodeTitle];
        this.episodesListList.push(eps);
      } else {
        eps.push(ep.episodeNum + ': ' + ep.episodeTitle);
      }
    });
    this.selectSeason.value = this.selectedSeason;
    this.episodesList = this.episodesListList[this.selectedSeason-1];
    this.selectEpisode.value = this.episodesList[0];
    this.selectEpisodeData();
    this.locateOnMap();
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  onSeasonChange(event) {
    this.selectedSeason = event.value;
    this.episodesList = this.episodesListList[this.selectedSeason-1];
    this.selectEpisode.value = this.episodesList[0];
    this.selectEpisodeData();
  }

  onEpisodeChange(event) {
    this.selectedEpisode = this.episodesList.indexOf(event.value)+1;
    this.selectEpisodeData();
  }

  selectEpisodeData() {
    this.selectedEpisodeData = this.episodes.find(
      episodio => episodio.seasonNum === this.selectedSeason &&
      episodio.episodeNum === this.selectedEpisode);
    this.currentDescription = this.selectedEpisodeData['episodeDescription'];

    const scenes = this.selectedEpisodeData['scenes'];
    this.totalSeconds = this.episodeStart = this.timeToSeconds(scenes[0]['sceneStart']);
    this.episodeLength = this.timeToSeconds(scenes[scenes.length-1]['sceneEnd']);

    this.calcSceneSegments();
    this.setSceneData(0);
    this.debugChoice(0);
    this.clickSelected = 1;
    this.findCharacters();
  }

  calcSceneSegments() {
    const segs = [];
    this.sceneTimeSecs = [];
    let min = 10000;
    this.selectedEpisodeData['scenes'].forEach(scene => {
      const elapsed = this.timeToSeconds(scene['sceneStart']);
      const sec = this.timeToSeconds(scene['sceneEnd'])-elapsed;
      if (sec < min) {
        min = sec;
      }
      this.sceneTimeSecs.push(elapsed);
      segs.push(sec);
    });
    this.sceneSegments = [];
    segs.forEach(seg => {
      this.sceneSegments.push(Math.round(seg/min * 100) / 100);  
    });
  }

  timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  setSceneData(sceneIndex) {
    this.sceneData.number = sceneIndex+1;
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.sceneData.characters = scene['characters'].map(o => o.name).join(', ');
    this.sceneData.location = scene['location'];
    this.sceneData.sublocation = scene['subLocation'] || '';
    this.sceneData.start = scene['sceneStart'];
    this.sceneData.end = scene['sceneEnd'];
  }

  debugChoice(sceneIndex) {
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.debugText  = 'Scene Number: ' + (sceneIndex+1)+'\n';
    this.debugText += 'Scene Start: '  + scene['sceneStart']+'\n';
    this.debugText += 'Scene End: '    + scene['sceneEnd']+'\n';
    this.debugText += 'Characters: '   + scene['characters'].map(o => o.name).join(', ')+'\n';
    this.debugText += 'Location: '     + scene['location']+'\n';
    this.debugText += 'Sublocation: '  + scene['subLocation']
  }

  onSceneHover(sceneIndex) {
    this.debugChoice(sceneIndex);
  }

  onSceneSearch(sceneIndex) {
    this.onSceneHover(sceneIndex);
  }
  
  onSceneSearchChange(sceneIndex) {}

  onSceneSearchEnd(sceneIndex) {
    this.debugChoice(this.clickSelected-1);
  }
  
  onSceneSelect(sceneIndex) {
    this.onSceneClick(sceneIndex); 
  }
    
  onSceneHoverOut(sceneIndex) {}

  onSceneClick(sceneIndex) {
    this.setSceneData(sceneIndex);
    this.clickSelected = sceneIndex+1;
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.totalSeconds = this.timeToSeconds(scene['sceneStart']);
    this.findCharacters();
    this.locateOnMap();
    this.debugChoice(sceneIndex);
  }

  allCharBio = [];
  currentCharIdx = 0;
  charsPerPage = 6;

  findCharacters() {
    this.currentCharIdx = 0;
    const sceneCharData = [];
    this.charBio = [];
    this.allCharBio = [];
    this.sceneData.characters.split(', ').forEach(char => {
      const charData = this.characters.find(
        charRef => charRef['characterName'] === char);
      if (charData) {
        sceneCharData.push(charData);
        const bio = {
          name: char,
          img: charData['characterImageFull'],
          house: charData.houseName ? typeof charData.houseName == 'string' ? charData.houseName : charData.houseName.join(', ') : '---'
        }
        this.allCharBio.push(bio);
        if (this.currentCharIdx < this.charsPerPage) {
          this.charBio.push(bio);
          this.currentCharIdx++;
        }
      } else {
        console.debug('Characeter NOT FOUND:', char);
      }
    });
  }

  previousChars($event) {
    if (this.currentCharIdx<this.charsPerPage) {
      return;
    }
    this.currentCharIdx -= 2*this.charsPerPage;
    if (this.currentCharIdx < 0) {
      this.currentCharIdx = 0;
    }
    this.placeCharactersForView();
  }

  nextChars($event) {
    if (this.allCharBio.length<=this.currentCharIdx) {
      return;
    }
    this.placeCharactersForView();
  }

  placeCharactersForView() {
    this.charBio = []
    let i = 0;
    while (this.currentCharIdx < this.allCharBio.length && i<this.charsPerPage) {
      this.charBio.push(this.allCharBio[this.currentCharIdx]);
      this.currentCharIdx++;
      i++;
    }
  }

  // Map

  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('zoom') zoom: ElementRef;

  map;
  mapZoomed;
  originalWidth;
  originalHeight;
  zoomDim = 480
  zoomWH = this.zoomDim+'px';
  zoomSize = '600%';
  xPercent = 0;
  yPercent = 0;
  circleRadius = 100;
  circleTop;
  circleLeft;

  squareStyle: { [key: string]: string } = {}; 
  circleStyle: { [key: string]: string } = {};

  setupMap() {
    this.map = this.image.nativeElement as HTMLImageElement;
    this.mapZoomed = this.zoom.nativeElement as HTMLImageElement;
    this.originalWidth = this.map.naturalWidth;
    this.originalHeight = this.map.naturalHeight;
    const z = this.zoom.nativeElement as HTMLImageElement;

    const zoomWidth = this.mapZoomed.offsetWidth;
    const zoomHeight = this.mapZoomed.offsetHeight;

    this.circleTop = (zoomHeight - this.circleRadius) / 2;
    this.circleLeft = (zoomWidth - this.circleRadius) / 2;

    this.circleStyle = {
      width: this.circleRadius + 'px',
      height: this.circleRadius + 'px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      position: 'absolute',
      top: this.circleTop + 'px',
      left: this.circleLeft + 'px'
    };
  }

  centerCircle() {
    this.circleStyle['top'] = this.circleTop+'px';
    this.circleStyle['left'] = this.circleLeft+'px';
  }

  moveCircle(moveTop, moveLeft) {
    this.circleStyle['top'] = (this.circleTop + this.circleRadius*moveTop)+'px';
    this.circleStyle['left'] = (this.circleLeft + this.circleRadius*moveLeft)+'px';
  }

  round(n) {
    return Math.round(n * 100) / 100;
  }

  debugMap = false;

  toggleMapDebug() {
    this.debugMap=!this.debugMap;
    if (this.debugMap) {
      this.circleMove(0, 0);
    }
  }

  circleMove(top, left) {
    this.moveCircle(top, left);
  }

  zoomImage(event: MouseEvent) {
    if (!this.debugMap) {
      return;
    }

    const rect = this.map.getBoundingClientRect();
    const scale = (this.map.naturalWidth) / this.map.offsetWidth;

    const squareSize = this.zoomDim/scale;

    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const x = this.round(offsetX * scale);
    const y = this.round(offsetY * scale);

    this.xPercent = this.round((x/this.originalWidth)*100);
    this.yPercent = this.round((y/this.originalHeight)*100);

    const zoomWindow = document.querySelector('.zoom-window') as HTMLElement;
    zoomWindow.style['background-position'] = `${this.xPercent}% ${this.yPercent}%`

    const left = event.clientX - rect.left - (squareSize*(x/this.map.naturalWidth));
    const top = event.clientY - rect.top - (squareSize*(y/this.map.naturalHeight));

    this.squareStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${squareSize}px`,
      height: `${squareSize}px`
    };

    console.debug(zoomWindow.style);
    console.debug(this.squareStyle);

    // this.locateOnMap();
  }

  locateOnMap() {
    const loc = this.locationsData.find(l =>
      l['location']==this.sceneData.location &&
      l['subLocation']==this.sceneData.sublocation);

    if (!loc) {
      console.debug('location not found :(')
      return;
    }
    this.xPercent = loc['x'];
    this.yPercent = loc['y'];
    this.moveCircle(loc['circleTop'], loc['clicleLeft']);
    // this.moveCircle(0,-1)

    const zoomWindow = document.querySelector('.zoom-window') as HTMLElement;
    zoomWindow.style['background-position'] = `${this.xPercent}% ${this.yPercent}%`

    const rect = this.map.getBoundingClientRect();
    const left = rect['width']*(this.xPercent/100);
    const top = rect['height']*(this.yPercent/100);

    const scale = (this.map.naturalWidth) / this.map.offsetWidth;
    const squareSize = this.zoomDim/scale;

    this.squareStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${squareSize}px`,
      height: `${squareSize}px`
    };
  }

}
