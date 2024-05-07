import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core"
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-scene-selector',
  templateUrl: './scene-selector.component.html'
})
export class SceneSelectorComponent implements AfterViewInit {

  @ViewChild('chart') chartRef: any;

  @Output() sceneSearch: EventEmitter<any> = new EventEmitter();
  @Output() sceneSearchEnd: EventEmitter<any> = new EventEmitter();
  @Output() sceneSearchChange: EventEmitter<any> = new EventEmitter();
  @Output() sceneSelect: EventEmitter<any> = new EventEmitter();

  seriesData = [];

  private _sceneData;
  @Input() set sceneData(d) {
    this._sceneData = d;
    if (this._sceneData.length>0) {
      this.seriesData = [];
      for (let i=0; i<this._sceneData.length; i++) {
        this.seriesData.push([
          'Scene '+(i+1), this._sceneData[i]
        ])
      };
      this.init();
    }
  };
  get sceneData() {
    return this._sceneData;
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;

  constructor() {}

  ngAfterViewInit(): void {
  }

  init() {

    // Create the chart
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'pie',
        backgroundColor: '#DCDCDC'
      },
      title: {
        text: null
      },
      yAxis: {
        title: {
            text: 'Scene Selector'
        }
      },
      plotOptions: {
        pie: {
          shadow: false,
          colors: [
            'rgba(0, 153, 255, 0.7)',
            'rgba(255, 51, 51, 0.7)'
          ]
        },
        series: {
          cursor: 'pointer',
          events: {
            click: function(event) {
              this.onClick(event);
            }.bind(this),
            mouseOut: function(event) {
              this.onWheelOut(event);
            }.bind(this)
          },
          point: {
            events: {
              mouseOver: function(event) {
                this.onHover(event);
              }.bind(this),
              mouseOut: function(event) {
                this.onSegmentOut(event);
              }.bind(this)
            }
          }
        }
      },
      tooltip: {
        formatter: function() {
            return '<b>'+ this.point.name +'</b>';
        }
      },
      series: [{
        name: 'Scenes',
        data: this.seriesData,
        size: '90%',
        innerSize: '30%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }]
    };

    const chartElement = this.chartRef.nativeElement;
    Highcharts.chart(chartElement, this.chartOptions);
  }

  onClick(event) {
    // console.log(event['point']['index']);
    this.sceneSelect.emit(event['point']['index']);
  }

  onHover(event) {
    // console.log(event['target']['index']);
    this.sceneSearch.emit(event['target']['index']);
  }

  onSegmentOut(event) {
    // console.log(event['target']['index']);
    this.sceneSearchChange.emit(event['target']['index']);
  }

  onWheelOut(event) {
    // console.log(event['target']['index']);
    this.sceneSearchEnd.emit(event['target']['index']);
  }

}