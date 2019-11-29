import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
import { Router, ChildActivationEnd } from '@angular/router'
import * as CanvasJS from '../../assets/canvasjs.min.js';
import {MatRadioModule} from '@angular/material/radio';
import { MatSort, MatSortable, MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-compared-two',
  templateUrl: './compared-two.component.html',
  styleUrls: ['./compared-two.component.scss']
})
export class ComparedTwoComponent implements OnInit {

  constructor(private runService: RunService, private router: Router, public app: AppComponent) { }
  r: Run[] 
  Maxvalue1 = 0
  Avgvalue1 = 0
  Maxvalue2 = 0
  Avgvalue2 = 0
  dps_list1 
  labelPosition = "start"
  checkdetail = "start"
  checked_detail =false
  runchoiceName
  outcomeName1 = ""
  outcomeName2 = ""
  outcomed
  DataSource1
  OutcomeList
  EventNameList
  ScoreList
  alllist
  chart
  check1 = false
  checkpickup = false
  
  check_detail_score = false
  top10 
  top20
  top30
  checkButton
  checkButton1
  doAdelay(){
    setTimeout(function(){return true;},300000);
  };
  calculate(score_list: any [], outcomeName: string){
    var count_score = [{0.1: 0, 0.2:0, 0.3:0 , 0.4:0 ,0.5:0 , 0.6:0 , 0.7:0 , 0.8:0 , 0.9:0, 1.0:0}] // 0 - 0.1 => 0.1 ++
      // console.log(count_score)
      for(var j = 0; j < score_list.length; j++ ){
        if(score_list[j] <0.5){
          if(score_list[j] >= 0.3){
            if(score_list[j] <0.4){
              count_score[0][0.4] +=1 //  0.3 <= x <0.4 
            }else{
              count_score[0][0.5] +=1 // 0.4 <= x < 0.5
            }
          }else if(score_list[j]<0.3){
            if(score_list[j] >= 0.2){
              count_score[0][0.3] +=1 //  0.2 <= x <0.3
            }else if( score_list[j]<0.2){
              if (score_list[j] >= 0.1){
                count_score[0][0.2] +=1 //  0.1 <= x <0.2
              }else{
                count_score[0][0.1] +=1 //  0 < x <0.1
              }
            }
          }
        }
        else if(score_list[j] >= 0.5){
          if(score_list[j]<0.7){
            if(score_list[j]>=0.6){
              count_score[0][0.7] += 1 // 0.6 <= x <0.7
            }else{
              count_score[0][0.6] += 1 // 0.5 <= x < 0.6
            }
          }else{ // >= 0.7
            if(score_list[j]<0.8){
              count_score[0][0.8] += 1 // 0.7 <= x < 0.8
            }else{
              if(score_list[j]< 0.9){
                count_score[0][0.9] += 1 // 0.8 <= x < 0.9
              }else{
                count_score[0][1] +=1   // 0.9 <= x < 1
              }
            }
          }
        }
        if(j === score_list.length-1){
          this.check_detail_score = true
        }
      } // end for loop
      console.log( "here is detail of ",outcomeName, " = >" ,count_score)
      this.runService.count_score = count_score
  }
 
runchart(){

  console.log(this.checkdetail)
  if(this.checkdetail === 'Column'){
    console.log("this.runchart ++++++++++++")
    var chart1 = new CanvasJS.Chart("chartContainers", {
      title:{
          text: "My First Chart in CanvasJS"              
      },
      data: [              
      {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints:  [{"label":"A","y":0},{"label":"B","y":5},{"label":"C","y":2},{"label":"D","y":0},{"label":"T","y":7},{"label":"A","y":0},{"label":"B","y":5},{"label":"C","y":2},{"label":"D","y":0},{"label":"T","y":7},{"label":"A","y":0},{"label":"B","y":10},{"label":"C","y":4},{"label":"D","y":0},{"label":"T","y":14}]
      }
          ]
    });
    if(!chart1.data){
      console.log("this.runchart -----------")
      this.doAdelay()
      chart1.render();
    }
   
  }else if(this.checkdetail === 'Max'){
    var temp = this.dps_list1
    console.log(temp)
    console.log('Max+++++++++ is ',temp.sort( (a,b) => (a.y < b.y) ? 1:-1 ).slice(0,1))
  }else if(this.checkdetail === 'Avg'){
    var temp = this.dps_list1
    var total =0
    temp.sort( (a,b) => (a.y < b.y) ? 1:-1 )
    for(var i = 0; i<temp.length;i++){
      total += temp[i].y
    }
    console.log('Avg+++++++++++ is ',total/temp.length) 
  }
  
}
onOptionsSelected(value:string){
    console.log("here the value is 1: ", value)
    this.checkpickup = true
    
    if(value != "Hi! Please pick up which outcome topic you like in here"){
      this.checkButton = true;
      // this.runService.outcomeName = value
      // console.log("the selected value is " + value);
      var local_outcomelist = this.OutcomeList
      // console.log(local_outcomelist)
      var index =0;
      index = local_outcomelist.indexOf(value)
      // console.log( "Here is ", index, " The string is ", local_outcomelist[index])
      this.outcomeName1 = value
      // console.log(this.ScoreList)
      var list_display_score = this.ScoreList
      // console.log(this.ScoreList[0][0])
      var dps1 = []; // dataPoints
      if(!dps1){
        this.doAdelay();
      };  
      var length_list = Object.keys(this.ScoreList).length
      var score_list = []
      for (var j = 0; j < length_list; j++) {	
                    dps1.push({
          y: this.ScoreList[j][1][index],
          label: this.ScoreList[j][0]
        });
        score_list[j] = this.ScoreList[j][1][index]
            
      }; 
      this.dps_list1 = dps1
      if(this.labelPosition === 'normal')
        console.log('normal') 
      if(this.labelPosition === 'large'){
        dps1.sort( (a,b) => (a.y < b.y) ? 1:-1 )
        console.log("large",dps1)

      }
      if(this.labelPosition === 'small'){
        dps1.sort( (a,b) => (a.y < b.y) ? -1:1 )
        console.log("small")
      }
    
      this.calculate(score_list, value)
    } // end of if-loop for check string is "pick up which outcome topic you want"
    else{
      this.checkButton = false;
      console.log("pick up which outcome topic you want ++++++++++++++++++++++++++++")
    }
    
}

  ngOnInit() {
    this.app.show();
    this.runchoiceName = this.runService.runName
   this.runService.showOutcomeTopics(this.runchoiceName).subscribe((val: OutcomeList) => //send http request and results are subscribed into val
    {
      this.doAdelay()
      this.DataSource1 = new MatTableDataSource(val.Eventlist);
      var input_listOutcomes = []
      var list_o = []
      list_o[0] = {id:0, name: "Hi! Please pick up which outcome topic you like in here"}
      for(var i = 0; i< this.DataSource1.data[0].Event_Outcome.length;i++){
        var inputs = String(this.DataSource1.data[0].Event_Outcome[i].OutcomeTopic)
        input_listOutcomes.push(inputs)
        list_o[i+1] = {id:i+1, name:inputs}
      }
      this.outcomed = list_o
      this.OutcomeList = input_listOutcomes
      this.runService.showScores(this.runchoiceName).subscribe((val: Run[]) => //send http request and results are subscribed into val
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
      var dps = []; // dataPoints
      for (var j = 0; j < this.OutcomeList.length; j++) {	
                  dps.push({
                    y: this.ScoreList[0][1][j], // 0 is for row, 1 just display list
                    label: this.OutcomeList[j]
                  });
                            
                }; 
                
    })
  
      
    })
  }

}
