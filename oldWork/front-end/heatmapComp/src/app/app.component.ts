import { Component } from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
// import { PointOptionsExtended } from './newpoint.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    getData(){ // returns list of objects i.e. the datalist for my chart
        var datalist = [];
        for (var i = 0; i < 558; i++){
            for (var j = 0; j < 47; j++){
                datalist.push({
                                x: j,
                                y: i,
                                value: Math.random(),
                                name: 'The Cell',
                                // event: 'The Cell',
                                // outcome: 'Introduction and General Biology'
                                custom: {event: 'Event', outcome: 'Outcome'}
                            });
            }
        }
        return datalist;
      }
    
    
    chart = new Chart({
        chart: {
          type: 'heatmap',
          margin: [80, 80, 140, 130]
        },
        title: {
            text: 'Highcharts heat map',
            align: 'left',
            x: 40
        },

        subtitle: {
            text: 'Curriculum Mapping using Mapradish',
            align: 'left',
            x: 40
        },
        credits: {
          enabled: false
        },
        xAxis: {
            title: {
                text: 'Outcomes',
                reserveSpace: true
            },
            categories: ['GP Biochemistry and molecular biology', 'GP Biology of Cells', 'GP Human development and genetics'],
            allowDecimals: false,
            labels: {
                // y: 40,
                reserveSpace: true
            }
            
        },
        
        yAxis: {
            title: {
                text: 'Events'
            },
            categories: [
            '11001 The_Cell',
            '11002 Histology_Introduction_to_Lab',
            '11003 Homeostasis_and_Body_Compartments',
            '11005 Theme_Case_Intro_Week_02'
            ],
            
        },
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a'],
                [1, '#c4463a']
            ],
            min: 0,
            max: 1,
            startOnTick: false,
            endOnTick: false,
            labels: {
                format: '{value}'
            },
        },
        plotOptions: {
            series: {
                
            },
            heatmap: {
                
            }
        },
        series: [
          {
            type: undefined,
            name: 'Curriculum Mapping',
            turboThreshold: 30000,
            data: this.getData(),
            boostThreshold: 30000,
            borderWidth: 0,
            nullColor: '#EFEFEF',
            tooltip: {
                // headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                pointFormat: '<b>{point.custom.event} {point.custom.outcome} {point.value}</b>'
            }
            
          }
        ]
      });
}
