import { Component, OnInit } from '@angular/core';
import { RunService } from '../run.service' 
import { Run, RunName} from '../run.model'
import { Router } from '@angular/router'


@Component({
  selector: 'app-bloop',
  templateUrl: './bloop.component.html',
  styleUrls: ['./bloop.component.scss']
})

export class BloopComponent implements OnInit {

  constructor(private runService: RunService,private router: Router) { }

  r: RunName[] // class has element r of type array of Runs
  list_a = []
  runchoice = "" // share this runchoice for different component 
  model:any
  
  showAllCollections(){  //Placeholder, supposed to implement using listCollections
    this.runService.listCollections().subscribe((val2: RunName[]) => //send http request and results are subscribed into val
    {
      for(var i = 0; i < val2.length; i++)
        this.list_a[i] = {id:i, name: (val2[i].runName)}
    })
 
    this.model = this.list_a
    
  }
  open(event){
    // this function changes the runService runName so it can be shared everywhere runservice is injected now
    this.runService.runName = this.runchoice
  }
  ngOnInit() {
    
    this.showAllCollections()
    
  }
  

}
