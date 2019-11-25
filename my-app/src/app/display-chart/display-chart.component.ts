import { Component, OnInit, ViewChild, AfterViewInit,OnDestroy} from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';


import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
import { MatTableModule } from '@angular/material/table';
import { Router, ChildActivationEnd } from '@angular/router'
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { MatSort, MatSortable, MatPaginator, MatTableDataSource } from '@angular/material';
import { chart } from 'highcharts/highcharts.src';
import {BloopComponent} from '../bloop/bloop.component';
import { element } from 'protractor';
@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.scss']
})
export class DisplayChartComponent implements OnInit {
  @ViewChild(BloopComponent, {static:true}) bloop_c;
  runchoiceName: string = ""
  outcomeName = ""
  outcomed
  DataSource1
  OutcomeList
  EventNameList
  ScoreList
  alllist
  chart
  check = false
  constructor(private runService: RunService, private router: Router) { }
  r: Run[] // class has element r of type array of Runs
  getData(){ // returns list of objects i.e. the datalist for my chart
  
    var datalist = [];
    for (var i = 0; i < this.EventNameList.length; i++){ // row
      var eventNames = this.ScoreList[i][0]
        for (var j = 0; j < this.OutcomeList.length; j++){ // order or cell in row
            datalist.push({
                            x: j,
                            y:i,
                            value: this.ScoreList[i][1][j],
                            name: 'The Cell',
                            custom: {event: eventNames, outcome: this.OutcomeList[j]}
                        });
        }
    }
    return datalist;
  }
   doAdelay(){
    setTimeout(function(){return true;},300000);
};
  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    var local_outcomelist = this.OutcomeList
    console.log(local_outcomelist)
    var index =0;
    index = local_outcomelist.indexOf(value)
    console.log( "Here is ", index, " The string is ", local_outcomelist[index])
    this.outcomeName = value
    console.log(this.ScoreList)
    var list_display_score = this.ScoreList
    console.log(this.ScoreList[0][0])
    var dps = []; // dataPoints
    let chart3 = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: this.DataSource1.data[0].Event
      },
      axisX :{ labelFontColor: "transparent", labelFormatter: function(e) {
        return "";
      }},
      axisY: { prefix: "Run_score ", includeZero: false },
      data: [{
        type: "column",
        legendMarkerType: "triangle",
        legendMarkerColor: "green",
        color: "rgba(255,12,32,.3)",
        showInLegend: false,
        legendText: "Score of Run",
        dataPoints : dps

      }]
    });
    if(!dps){
      this.doAdelay();
    };  
    var length_list = Object.keys(this.ScoreList).length
    console.log(length_list)
    console.log("Here is y ",this.ScoreList[1][0])
    console.log("Here is label ",this.ScoreList[1][1][0])
      for (var j = 0; j < length_list; j++) {	
                  dps.push({
        y: this.ScoreList[j][1][index],
        label: this.ScoreList[j][0]
      });
          
    }; 
    this.check = true 
    if(dps){
      this.doAdelay();
    };  
    console.log(" hi true 2 ", this.check)
    if(this.check === true){
      console.log(" hi ")
      chart3.render();
      this.chart == false
    };
    
      // this.check = 1
     
    // for(var row = 0; row < this.ScoreList.length ;row++){
    //   console.log("name", this.ScoreList[row][0], " the score is ")
    // }
}
  ngOnInit() {
  //  console.log("Start here ", this.runService.runName)
   this.runchoiceName = this.runService.runName
   this.runService.showOutcomeTopics(this.runchoiceName).subscribe((val: OutcomeList) => //send http request and results are subscribed into val
    {
      
    
      this.DataSource1 = new MatTableDataSource(val.Eventlist);
      var input_listOutcomes = []
      var list_o = []
      for(var i = 0; i< this.DataSource1.data[0].Event_Outcome.length;i++){
        // console.log(this.DataSource1.data[0].Event_Outcome[i].OutcomeTopic)
        var inputs = String(this.DataSource1.data[0].Event_Outcome[i].OutcomeTopic)
        input_listOutcomes.push(inputs)
        list_o[i] = {id:i, name:inputs}
      }
      this.outcomed = list_o
      this.OutcomeList = input_listOutcomes
      // console.log(this.OutcomeList)
       this.runService.showEventNames(this.runchoiceName).subscribe((val: Run[]) => //send http request and results are subscribed into val
    {
     
      var input_list_EventNames = []
      for (var i = 0; i< val.length;i++){
        // console.log(val[i])
        for(var j = 0; j< val[i].Eventlist.length;j++){
          //console.log(val[i].Eventlist[j])
          var inputS = String(val[i].Eventlist[j].Event)
          input_list_EventNames.push(inputS)
        }
      }
      this.EventNameList = input_list_EventNames
      this.runService.showScores(this.runchoiceName).subscribe((val: Run[]) => //send http request and results are subscribed into val
    {
      
      // console.log("hello from showAllScores")
      // console.log(this.OutcomeList)
      //this.r = val; //send the results the element r 
      // console.log(val)
      // console.log(val[0].Eventlist[0]) //for each row 
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
          // console.log(this.ScoreList[row].Event_Outcome[index].Score)
          insidelist.push((input_list_score[row].Event_Outcome[index].Score))
        }
        // console.log(insidelist)
        final_row_Event_cell_list[row] = [input_list_score[row].Event,insidelist]
      }
      this.ScoreList = final_row_Event_cell_list

      // for(var i = 0; i <  input_list_score.length; i++){
      //   console.log(this.ScoreList[i][0], " score is ", this.ScoreList[i][0][0])
      // }


      var dps = []; // dataPoints
      for (var j = 0; j < this.OutcomeList.length; j++) {	
                  dps.push({
                    y: this.ScoreList[0][1][j], // 0 is for row, 1 just display list
                    label: this.OutcomeList[j]
                  });
                            
                }; 

      
      let chart1 = new CanvasJS.Chart("chartContainer1", {
                  animationEnabled: true,
                  exportEnabled: true,
                  title: {
                    text: this.DataSource1.data[0].Event
                  },
                  axisY: { prefix: "Run_score ", includeZero: false },
                  data: [{
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - #percent %",
                    dataPoints: dps
                  }]
                });
               
  
      // this.alllist = this.ScoreList
      let chart2 = new CanvasJS.Chart("chartContainer2", {
                  animationEnabled: true,
                  exportEnabled: true,
                  title: {
                    text: this.DataSource1.data[0].Event
                  },
                  axisX :{ labelFontColor: "transparent", labelFormatter: function(e) {
                    return "";
                  }},
                  axisY: { prefix: "Run_score ", includeZero: false },
                  data: [{
                    type: "column",
                    legendMarkerType: "triangle",
                    legendMarkerColor: "green",
                    color: "rgba(255,12,32,.3)",
                    showInLegend: false,
                    legendText: "Score of Run",
                    dataPoints : dps
        
                  }]
                });
            
        chart2.render();
        chart1.render();  
                
    })
    })
      
    })
  }


}

