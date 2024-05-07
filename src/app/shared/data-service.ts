import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  @Output() globalData: EventEmitter<any> = new EventEmitter();

  episodes;
  characters;
  locationsData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async readFiles() {
    console.log('readFiles');
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
        this.globalData.emit({
          episodes: this.episodes,
          characters: this.characters,
          locationsData: this.locationsData
        });
      },
      error => {
        console.debug(error);
      }
    );
  }

}