import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data-service';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import SankeyModule from 'highcharts/modules/sankey';
import OrganizationModule from 'highcharts/modules/organization';
import ArcModule from 'highcharts/modules/arc-diagram';
import HeatmapModule from 'highcharts/modules/heatmap';
import TreemapModule from 'highcharts/modules/treemap';
import ExportingModule from 'highcharts/modules/exporting';
import ExportingDataModule from 'highcharts/modules/export-data';
import AccessibilityDataModule from 'highcharts/modules/accessibility';

More(Highcharts);
SankeyModule(Highcharts);
OrganizationModule(Highcharts);
ArcModule(Highcharts);
HeatmapModule(Highcharts);
TreemapModule(Highcharts);
ExportingModule(Highcharts);
ExportingDataModule(Highcharts);
AccessibilityDataModule(Highcharts);

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, AfterViewInit {

  Highcharts: typeof Highcharts = Highcharts;

  @ViewChild('bubble') bubbleRef: any;
  @ViewChild('chart') chartRef: any;
  @ViewChild('locations') locationsRef: any;
  @ViewChild('scenes') scenesRef: any;
  @ViewChild('family') familyRef: any;

  // Menu
  showFamilyNames: boolean = true;

  chageFamilyType(checked: boolean) {
    this.showFamilyNames = checked;
    this.setAll(true);
    this.selectDefaultCharacter();
    this.setCharSelectionChart();
  }

  task = {
    name: 'Select All Seasons',
    checked: true,
    color: 'primary',
    subtasks: [
      {name: '1', checked: true, color: 'primary'},
      {name: '2', checked: true, color: 'primary'},
      {name: '3', checked: true, color: 'primary'},
      {name: '4', checked: true, color: 'primary'},
      {name: '5', checked: true, color: 'primary'},
      {name: '6', checked: true, color: 'primary'},
      {name: '7', checked: true, color: 'primary'},
      {name: '8', checked: true, color: 'primary'}
    ],
  };

  setAll(checked: boolean) {
    this.task.checked = checked;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.checked = checked));
  }

  // 

  globalData;

  houseNames;
  houseSeries = [];
  nameSeries = [];

  noHouseNames = [];
  noHouseSeries = [];
  noNameSeries = [];

  houseColors = {
    Targaryen: "#FFDEAD",
    Greyjoy: "#778899",
    Lannister: "#DC143C",
    Stark: "#F0F8FF",
    Baratheon: "#E6CDFF",
    Frey: "#CDE6FF",
    Tully: "#87CEFA",
    Martell: "#FFEBAF",
    Mormont: "FFFAFA",
    Tyrell: "#CDFFCD",
    Arryn: "#00BFFF",
    Umber: "#F8F8FF",
    Bolton: "#778899",
    Tarly: "#7FFFD4",
    "No Family": "#5F9EA0"
  };

  charData;
  locations;
  scenesData;

  familyData = [];
  familyLevels = [];
  familyNodes = [];
  
  constructor(private dataService: DataService) {
    this.dataService.readFiles();
  }

  ngOnInit(): void {
    this.dataService.globalData.subscribe((data) => {
      this.globalData = data;
      this.init();
    });
  }

  ngAfterViewInit(): void {
  }

  init() {
    this.setHouseNames();
    this.setCharSelectionChart();
  }

  setHouseNames() {
    const houseNamesSet = new Set();
    this.globalData.characters.forEach(character => {
      if (typeof character.houseName === 'string') {
        houseNamesSet.add(character.houseName);
      }
      else if (Array.isArray(character.houseName)) {
        character.houseName.forEach(name => {
          houseNamesSet.add(name);
        });
      }
    });
    const houses = Array.from(houseNamesSet);
    this.houseNames = [];
    houses.forEach(h => {
      this.houseNames.push({
        name: h,
        categories: []
      });
    });
    this.noHouseNames.push({
      name: 'No Family',
      categories: []
    });
    this.presetHouseDonutData();
  }

  presetHouseDonutData() {
    const chars = this.globalData.characters;
    for (let i=0; i<chars.length; i++) {
      const char = chars[i];
      if (!char['houseName']) {
        this.noHouseNames[0].categories.push(char['characterName']);
      } else if (typeof char['houseName'] === 'string') {
        this.addCharHouse(char['characterName'], char['houseName']);
      } else if (Array.isArray(char['houseName'])) {
        char['houseName'].forEach(house => {
          this.addCharHouse(char['characterName'], house);
        });
      }
    }
    this.setDonutData();
  }

  setDonutData() {
    this.houseSeries = [];
    this.nameSeries = [];
    this.houseNames.forEach(hn => {
      this.houseSeries.push({
        name: hn['name'],
        y: hn['categories'].length,
        color: this.houseColors[hn['name']]
      });
      hn['categories'].forEach(name => {
        this.nameSeries.push({
          name: name,
          y: 1,
          color: this.houseColors[hn['name']]
        });
      });
    });

    this.noHouseSeries.push({
      name: this.noHouseNames[0]['name'],
      y: this.noHouseNames[0]['categories'].length,
      color: this.houseColors[this.noHouseNames[0]['name']]
    });
    this.noHouseNames[0]['categories'].forEach(name => {
      this.noNameSeries.push({
        name: name,
        y: 1,
        color: this.houseColors[this.noHouseNames[0]['name']]
      });
    });

    this.selectDefaultCharacter();
  }

  selectDefaultCharacter() {
    if (this.showFamilyNames) {
      this.selectCharacter(this.nameSeries[2]);
    } else {
      this.selectCharacter(this.noNameSeries[20]);
    }
  }

  addCharHouse(name, house) {
    const houseRef = this.houseNames.find(h => h.name==house);
    if (houseRef) {
      houseRef.categories.push(name);
    }
  }

  setCharSelectionChart() {
    let nameSeries;
    let houseSeries;
    if (this.showFamilyNames) {
      nameSeries = this.nameSeries;
      houseSeries = this.houseSeries;
    } else {
      nameSeries = this.noNameSeries;
      houseSeries = this.noHouseSeries;
    }

    const options = {
      chart:  {
        renderTo: 'container',
        type: 'pie',
        backgroundColor: '#DCDCDC'
      },
      title: {
        text: 'Main Houses'
      },
      tooltip: {
        formatter: function() {
            return '<b>'+ this.point.name +'</b>';
        }
      },
      plotOptions: {
        pie: {
          shadow: true,
        },
        series: {
          cursor: 'pointer',
          events: {
            click: function(event) {
              this.onCharacterClick(event);
            }.bind(this)
          }
        }
      },
      series: [{
        innerSize: 150,
        size: 300,
        data: nameSeries
      }, {
        innerSize: 100,
        size: 150,
        data: houseSeries
      }]
    };

    const chartElement = this.chartRef.nativeElement;
    // @ts-ignore
    Highcharts.chart(chartElement, options);
  }

  onCharacterClick(event) {
    let charGraphData;
    if (this.showFamilyNames) {
      charGraphData = this.nameSeries[event['point']['index']];
    } else {
      charGraphData = this.noNameSeries[event['point']['index']];
    }
    this.selectCharacter(charGraphData);
  }

  onFamilyCharacterClick(event) {
    console.log(event, event.point.id);
    let charGraphData;
    if (event.point.id) {
      charGraphData = this.nameSeries.find(char => char.name==event.point.id);
      if (charGraphData) {
        this.selectCharacter(charGraphData);
      } else {
        charGraphData = this.noNameSeries.find(char => char.name==event.point.id);
        if (charGraphData) {
          this.selectCharacter(charGraphData);
        }
      }
    }
  }

  onBubbleCharacterClick(event) {
    const name = event.point.name;
    console.log(name)
    if (!this.selectFromNameSeries(name)) {
      this.selectFromNoNameSeries(name);
    }
  }

  selectFromNameSeries(name) {
    const charGraphData = this.nameSeries.find(char => char.name==name);
    console.log(charGraphData)
    if (charGraphData) {
      this.selectCharacter(charGraphData);
      return true;
    }
    return false;
  }

  selectFromNoNameSeries(name) {
    const charGraphData = this.noNameSeries.find(char => char.name==name);
    console.log(charGraphData)
    if (charGraphData) {
      this.selectCharacter(charGraphData);
      return true;
    }
    return false;
  }

  selectCharacter(charGraphData) {
    this.charData = this.globalData.characters.find(c => c['characterName']==charGraphData['name']);
    const eps = this.globalData.episodes;

    console.debug('CHARACTER:', this.charData);

    let lastLocation;
    this.locations = [];
    this.scenesData = [];
    const timeElapsed = [];
    let minTime = 3600;
    let maxTime = 0;
    for (let i=0; i<eps.length; i++) {
      for (let j=0; j<eps[i]['scenes'].length; j++) {

        const seasonSelected = this.task.subtasks.find(st => st.name==(eps[i]['seasonNum']+''));
        if (!seasonSelected.checked) {
          continue;
        }

        const t = eps[i]['scenes'][j]['characters'].find(char => char['name']==this.charData['characterName']);
        if (t) {
          const location = eps[i]['scenes'][j]['location'];
          if (!lastLocation) {
            lastLocation = location;
          } else {
            if (lastLocation != location) {
              this.locations.push([lastLocation, location, 1]);
              lastLocation = location;
            }
          }
          const sdata = {
            name: 'S'+eps[i]['seasonNum']+'E'+eps[i]['episodeNum']+'S'+(j+1),
            value: eps[i]['seasonNum'],
            colorValue: eps[i]['seasonNum']
          };

          this.scenesData.push(sdata);

          const elapsed = this.calcElapsedSeconds(eps[i]['scenes'][j]['sceneStart'], eps[i]['scenes'][j]['sceneEnd']);
          timeElapsed.push(elapsed);
          if (elapsed < minTime) {
            minTime = elapsed;
          }
          if (elapsed > maxTime) {
            maxTime = elapsed;
          }
        }
      }
    }
    if (this.locations.length == 0) {
      this.locations.push([lastLocation, lastLocation, 1]);
    }
    for (let i=0; i<this.scenesData.length; i++) {
      this.scenesData[i]['value'] = timeElapsed[i]/minTime
    }
    console.debug('LOCATIONS', this.locations);
    console.debug('SCENES', this.scenesData);
    // console.debug('TIME ELAPSED', timeElapsed, minTime);
    this.setLocationsChart();
    this.setScenesChart();
    this.setBubbleChart();

    this.familyData = [];
    this.familyNodes = [];
    this.addCharAndParents(this.charData, '#DC143C');
    if (this.charData['siblings']) {
      this.charData['siblings'].forEach(sib => {
        const s = this.globalData.characters.find(s => s['characterName']==sib);
        if (s) {
          this.addCharAndParents(s);
        }
      });
    }
    this.setFamilyTreeChart();
  }

  addCharAndParents(charData, color=null) {
    const node = {
      id: charData['characterName'],
      title: charData.houseName ? typeof charData.houseName == 'string' ? charData.houseName : charData.houseName.join(', ') : '---',
      name: charData['characterName'],
      image: charData['characterImageThumb']
    }
    if (color) {
      node['color'] = color;
    }
    console.log('NODE', node)
    this.familyNodes.push(node);
    if (charData['parents']) {
      charData['parents'].forEach(parent => {
        this.familyData.push(
          [parent, charData['characterName']]
        );
        const p = this.globalData.characters.find(c => c['characterName']==parent);
        this.familyNodes.push({
          id: parent,
          title: p.houseName ? typeof p.houseName == 'string' ? p.houseName : p.houseName.join(', ') : '---',
          name: parent,
          image: p ? p['characterImageThumb'] : 'assets/placeholder.jpg'
        });
      });      
    }
    if (charData['parentOf']) {
      charData['parentOf'].forEach(son_daughter => {
        this.familyData.push(
          [charData['characterName'], son_daughter]
        );
        const sd = this.globalData.characters.find(c => c['characterName']==son_daughter);
        this.familyNodes.push({
          id: son_daughter,
          title: sd.houseName ? typeof sd.houseName == 'string' ? sd.houseName : sd.houseName.join(', ') : '---',
          name: son_daughter,
          image: sd ? sd['characterImageThumb'] : 'assets/placeholder.jpg'
        });
      });     
    } else {
      this.familyData.push(
        [charData['characterName'], '---']
      );
      this.familyNodes.push({
        id: '---',
        title: '---',
        name: '---',
        image: 'assets/placeholder.jpg'
      });
    }
  }

  calcElapsedSeconds(tStart, tEnd) {
    const [hours, minutes, seconds] = tStart.split(':').map(Number);
    const tS = hours * 3600 + minutes * 60 + seconds;
    const [hours1, minutes1, seconds1] = tEnd.split(':').map(Number);
    const tE = hours1 * 3600 + minutes1 * 60 + seconds1;
    return tE - tS;
  }

  setLocationsChart() {
    const options = {
      chart: {
        inverted: false,
        height: 400,
        backgroundColor: '#DCDCDC'
      },
      colors: ['#293462', '#a64942', '#fe5f55', '#fff1c1', '#5bd1d7', '#ff502f',
               '#004d61', '#ff8a5c', '#fff591', '#f5587b', '#fad3cf', '#a696c8',
               '#5BE7C4', '#266A2E', '#593E1A'],
      title: {
          text: 'Character Journey'
      },
      accessibility: {
        description: 'Character journey.',
        point: {
            valueDescriptionFormat: 'Connection from {point.from} to {point.to}.'
        }
      },
      series: [{
          keys: ['from', 'to', 'weight'],
          type: 'arcdiagram',
          name: 'Character Journey',
          linkWeight: 1,
          centeredLinks: true,
          dataLabels: {
              rotation: 0,
              y: 30,
              verticalAlign: 'top',
              color: 'black',
              padding: 0
          },
          offset: '100%',
          data: this.locations
      }]
    }
    const locChartElement = this.locationsRef.nativeElement;
    // @ts-ignore
    Highcharts.chart(locChartElement, options);
  }

  setScenesChart() {

    const options = {
      chart: {
        height: 380,
        backgroundColor: '#DCDCDC'
      },
      colorAxis: {
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
      },
      series: [{
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          clip: false,
          data: this.scenesData
      }],
      title: {
          text: 'Scenes With Charater'
      }
    };
    
    // @ts-ignore
    Highcharts.chart(this.scenesRef.nativeElement, options);
  }

  setFamilyTreeChart() {
    const options = {
      chart: {
        height: 400,
        inverted: true,
        backgroundColor: '#DCDCDC'
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: function(event) {
              this.onFamilyCharacterClick(event);
            }.bind(this)
          }
        }
      },
      title: {
        text: 'Family Tree'
      },
      accessibility: {
        point: {
          descriptionFormat: '{add index 1}. {toNode.name}' +
            '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
            'reports to {fromNode.id}'
        }
      },
      series: [{
        type: 'organization',
        name: 'Family Tree',
        keys: ['from', 'to'],
        data: this.familyData,
        levels: this.familyLevels,
        nodes: this.familyNodes,
        colorByPoint: false,
        color: '#778899',
        dataLabels: {
            color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 'auto'
      }],
      tooltip: {
          outside: true
      },
      exporting: {
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
      }
    }
    // @ts-ignore
    Highcharts.chart(this.familyRef.nativeElement, options);
  }

  setBubbleChart() {

    this.setBubbleData(this.charData);

    const options = {
      chart: {
          type: 'packedbubble',
          height: '100%',
          backgroundColor: '#DCDCDC'
      },
      title: {
          text: 'Other Relations',
          align: 'left'
      },
      tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}'
      },
      plotOptions: {
          packedbubble: {
              minSize: '20%',
              maxSize: '100%',
              zMin: 0,
              zMax: 1000,
              layoutAlgorithm: {
                  gravitationalConstant: 0.05,
                  splitSeries: true,
                  seriesInteraction: false,
                  dragBetweenSeries: true,
                  parentNodeLimit: true
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  filter: {
                      property: 'y',
                      operator: '>',
                      value: 250
                  },
                  style: {
                      color: 'black',
                      textOutline: 'none',
                      fontWeight: 'normal'
                  }
              }
          },
          series: {
            cursor: 'pointer',
            events: {
              click: function(event) {
                this.onBubbleCharacterClick(event);
              }.bind(this)
            }
          }
      },
      series: this.bubbleSeries
    }
  
    // @ts-ignore
    Highcharts.chart(this.bubbleRef.nativeElement, options);
  }

  bubbleSeries = [];

  setBubbleData(charData) {
    this.bubbleSeries = [];
    if (charData['killed']) {
      this.addBubble('Killed', charData['killed']);
    }
    if (charData['killedBy']) {
      this.addBubble('Killed By', charData['killedBy']);
    }
    if (charData['servedBy']) {
      this.addBubble('Served By', charData['servedBy']);
    }
    if (charData['serves']) {
      this.addBubble('Serves', charData['serves']);
    }
    if (charData['guardianOf']) {
      this.addBubble('Guardian Of', charData['guardianOf']);
    }
    if (charData['guardedBy']) {
      this.addBubble('Guarded By', charData['guardedBy']);
    }
    if (charData['marriedEngaged']) {
      this.addBubble('Married/Engaged', charData['marriedEngaged']);
    }
  }

  addBubble(title, itens) {
    const b = {
      name: title,
      data: []
    }
    itens.forEach(d => {
      const bItem = {
        name: d,
        value: 1
      };
      b['data'].push(bItem);
      this.scenesData.forEach(sd => {
        const numeros = sd['name'].match(/\d+/g);
        const ep = this.globalData.episodes.find(e =>
          e['seasonNum']==numeros[0] && e['episodeNum']==numeros[1]);
        const found = ep['scenes'][parseInt(numeros[2],10)-1]['characters'].find(c => c['name']==d);
        if (found) {
          bItem['value'] += 1;
        }
      });
    });
    this.bubbleSeries.push(b);
  }


}
