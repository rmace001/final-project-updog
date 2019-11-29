import { Component, OnInit, ViewChild } from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
import { AppComponent } from '../app.component';

import * as Highcharts from 'highcharts';
import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router'
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as HighchartsMore from "highcharts/highcharts-more";
import * as HighchartsExporting from "highcharts/modules/exporting";
import { MatSort, MatSortable, MatPaginator, MatTableDataSource } from '@angular/material';
import { chart } from 'highcharts/highcharts.src';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
    DataSource1
    OutcomeList
    OutcomeDict = []
    model:any
    EventNameList
    ScoreList
    alllist
    chartCallback;
    OutcomeChoice = "" // outcome choice to heatmap
    chartConstructor = "chart";
    updateFromInput = false;
    changing: boolean = false;
    runName: string = ""
    
    chart;
    public dynamic_data: any; 
    public options: any = {
        chart: {
            type: 'heatmap',
            zoomType: 'xy',
            height: 1700,
            width: 1200,
            margin: [80, 5, 400, 230],
            spacing: [10, 10, 100, 10]
        },
        exporting: {
            enabled: true
        },
        title: {
            text: 'Highcharts heat map',
            align: 'left',
            x: 60
        },
        subtitle: {
            text: 'Curriculum Mapping using Mapradish',
            align: 'left',
            x: 60
        },
        credits: {
            enabled: false
        },
         xAxis: {
            title: {
                text: 'Outcomes',
                reserveSpace: true
            },
            //   categories: this.OutcomeList,
            // make sure to update xAxis categories to this.OutcomeList
            categories: ['Outcome 1'],
            allowDecimals: false,
            labels: {
                // reserveSpace: true
            },
            scrollbar: {
                enabled: true
            } 
        },
        yAxis: {
            title: {
                text: 'Events'
            },
            //   categories: this.EventNameList,
              // be sure to update the yAxis categories in the update funciton
            categories: ['this.EventNameList'],
            scrollbar: {
                enabled: true
            }
            //   tickLength: 100
              
        },
        legend:{
            align: 'center',
            verticalAlign: 'top',
            floating: true        
        },
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a'],
                [1, '#c4463a']
            ],
            // layout: 'vertical',
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
                rowsize: 1
            }
        },
        series: [
            {
                type: undefined,
                name: 'Curriculum Mapping',
                turboThreshold: 60000,
                // data: this.getData(),
                // be sure to update the series data in the update function
                data: this.getData2(),
                boostThreshold: 60000,
                borderWidth: 0,
                nullColor: '#EFEFEF',
                tooltip: {
                    // headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                    pointFormat: '<b>Event: </b> {point.custom.event} <br/><b>Outcome: </b>{point.custom.outcome} <br/><b>Score: </b>{point.value}'
                }
            }
        ]
    };
    constructor(private runService: RunService, private router: Router, public app: AppComponent) {
        const self = this;

        this.chartCallback = chart => {
        self.chart = chart;
        };
     }
    r: Run[] // class has element r of type array of Runs
    
    
    getData(){ // returns list of objects i.e. the datalist for my chart
        var datalist = [];
        for (var i = 0; i < this.EventNameList.length; i++){ // row
        // for (var i = 0; i < 100; i++){ // row
            var eventNames = this.ScoreList[i][0]
            for (var j = 0; j < this.OutcomeList.length; j++){ // order or cell in row
                datalist.push({
                                x: j,
                                y: i,
                                value: this.ScoreList[i][1][j],
                                name: 'The Cell',
                                custom: {event: eventNames, outcome: this.OutcomeList[j]}
                            });
            }
        }
        return datalist;
    }
    
    //getData2 is for getting initial dummy data to display while subscribe function is running
    getData2(){ // returns list of dummy objects
        var datalist = [];
        for (var i = 0; i < 500; i++){ // row
            for (var j = 0; j < 45; j++){ // order or cell in row
                datalist.push({
                                x: j,
                                y:i,
                                value: Math.random(),
                                name: 'The Cell',
                                custom: {event: 'eventNames', outcome: 'this.OutcomeList[j]'}
                            });
            }
        }
        return datalist;
    } // end getData2()
  
 
    ngOnInit() {
        this.app.show();
        this.runName = this.runService.runName
        this.runService.showOutcomeTopics(this.runName).subscribe((val: OutcomeList) => //send http request and results are subscribed into val
        {
        
    
            this.DataSource1 = new MatTableDataSource(val.Eventlist);
    
            var input_listOutcomes = []
            for(var i = 0; i< this.DataSource1.data[0].Event_Outcome.length;i++){
                var inputs = String(this.DataSource1.data[0].Event_Outcome[i].OutcomeTopic)
                input_listOutcomes.push(inputs)
            }
            this.OutcomeList = input_listOutcomes
        
            this.runService.showEventNames(this.runName).subscribe((val: Run[]) => //send http request and results are subscribed into val
            {  
                var input_list_EventNames = []
                for (var i = 0; i< val.length;i++){
                    for(var j = 0; j< val[i].Eventlist.length;j++){
                        var inputS = String(val[i].Eventlist[j].Event)
                        input_list_EventNames.push(inputS)
                    }
                }
                this.EventNameList = input_list_EventNames
        
                this.runService.showScores(this.runName).subscribe((val: Run[]) => //send http request and results are subscribed into val
                {
                    var input_list_score = []
                    for(var i = 0 ; i < val.length; i++){ // for same block and year
                        for(var j = 0; j < val[i].Eventlist.length; j++){
                            var inputs =  val[i].Eventlist[j]
                            input_list_score.push(inputs) 
                        }
                    }
                    this.ScoreList = input_list_score
                    var final_row_Event_cell_list = {}
                    for(var row = 0; row < input_list_score.length; row++){
                        var insidelist = []
                        for (var index =0; index < input_list_score[row].Event_Outcome.length;index++ ){
                            insidelist.push((input_list_score[row].Event_Outcome[index].Score))
                        }
                        final_row_Event_cell_list[row] = [input_list_score[row].Event,insidelist]
                    }
                    this.ScoreList = final_row_Event_cell_list
                    this.alllist = this.ScoreList
                    this.options.series[0].data = this.getData();
                    this.options.xAxis.categories = this.OutcomeList;
                    this.options.yAxis.categories = this.EventNameList;
                    for(var i = 0; i < this.OutcomeList.length; i++)
                        this.OutcomeDict[i] = {id:i, name: (this.OutcomeList[i])}
                    
                    this.chart = new Chart(this.options);
                    this.model = this.OutcomeDict;
                })
            })
        })
    }
  
  
    changeChart(){      
        var selections: any[] = [0,4,13, 45, 15]; 
        var newCategories = [];
        var newData = []; 
        var tempPoint: any;
        
        for(var i = 0; i < selections.length; i++){
            newCategories.push(this.options.yAxis.categories[selections[i]]);
            for (var j = 0; j < this.OutcomeList.length; j++){
                tempPoint = this.options.series[0].data[selections[i]*this.OutcomeList.length + j];
                tempPoint.y = i;
                newData.push(tempPoint);
            }
        }
        this.chart = null;
        this.options.yAxis.categories = newCategories;
        this.options.series[0].data = newData;
        this.changing = false;
        this.chart = new Chart(this.options);
        
        // const self = this,
        // chart = this.chart;

        // chart.showLoading();
        // setTimeout(() => {
        //     chart.hideLoading();

        //     self.options.series = [
        //     {
        //         data: newData
        //     }
        //     ];
            
        //     self.options.yAxis.categories = newCategories;

        //     self.updateFromInput = true;
        // }, 2000);

    }  
}
