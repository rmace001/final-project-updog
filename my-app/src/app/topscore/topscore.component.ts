
import { Component, OnInit, ViewChild, AfterViewInit,OnDestroy} from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
import { AppComponent } from '../app.component';

import { Router, ChildActivationEnd } from '@angular/router'
import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
import { element } from 'protractor';
@Component({
  selector: 'app-topscore',
  templateUrl: './topscore.component.html',
  styleUrls: ['./topscore.component.scss']
})
export class TopscoreComponent implements OnInit {
   top10 = []
   top20 = []
   top30 = []
   top10_all = []
   scorelist = []
   radioChoice
   outcomename
   outcomelist = []
   top10score_total = []
  constructor(private runService: RunService, public app: AppComponent) { }
  top10func(){
    console.log("Hi")
    // console.log(this.scorelist.find( ({label}) => label === "21024 Introduction_to_Anemias"))
    // console.log(this.scorelist.find(element => element[0]))
    // console.log(this.top10) // {y: 0.85, label: "203002 The_Cell_As_A_Unit_Of_Health_And_Disease", x: 548}
    // console.log(this.top10.find(({label}) => label === "203002 The_Cell_As_A_Unit_Of_Health_And_Disease"))
    // if(this.top10.find(({label}) => label === "203002 The_Cell_As_A_Unit_Of_Health_And_Disease") != null){
    //   console.log("find")
    // }
    // console.log(this.top10.find(({label}) => label === "2102 Introduction_to_Anemias"))
    // if(this.top10.find(({label}) => label === "2102 Introduction_to_Anemias") == null){
    //   console.log("don't find")
    // }
    this.outcomelist =  this.runService.outcomeNamelist
    var dps =[]
    var check = true;
    for (var j = 0; j < Object.keys(this.scorelist).length; j++) {	
      var nameofEvent = this.scorelist[j][0]
      if(this.top10.find(({label}) => label === this.scorelist[j][0]) != null){
        this.top10_all.push({ id :j, eventName: nameofEvent , array:  this.scorelist[j][1]})
        
        if(check === false){
          var temp = this.scorelist[j][1]
          dps = dps.map((a,i) => a+temp[i]);
          // console.log(temp)
          // console.log("now is ", dps)
        }
        else{
          dps = this.scorelist[j][1]
          // console.log("now is ", dps)
          check = false
        }// 0.75, 0.27, 0.68, 0.11, 0.14, 0.58, 0.12 + 0.83, 0.32, 0.5, 0.14, 0.16,
      }
    }
    this.top10score_total = dps
    if(this.top10_all != null){
      console.log(this.top10_all) // {eventName: "102001 Introduction_To_Medical_Genetics_Gene_Regulation", array: Array(47)}
      console.log(dps)
      // var temp
      // for (var i = 0; i <dps.length; i++){
      //   temp.push({outcomeName: this.outcomelist[i], totalscore: dps[i]})
      // }
      // console.log(temp)
      // this.top10score_total = temp
      // console.log(this.top10score_total)
    }
  }
  ngOnInit() {
    this.scorelist = this.runService.scorelist
    this.app.show();
    this.outcomename = this.runService.outcomeName
    this.top10  = this.runService.top10score 
    this.top20  = this.runService.top20score 
    this.top30  = this.runService.top30score 
   

    console.log(this.scorelist)// sort by large to small
    if(this.top10)
      this.top10func()
  }

}
