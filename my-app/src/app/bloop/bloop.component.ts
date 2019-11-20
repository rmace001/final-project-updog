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

  constructor(private runService: RunService, private router: Router) { }
  r: RunName[] // class has element r of type array of Runs
  list_a = []
  // showAllRuns(){  //Placeholder, supposed to implement using listCollections
  //   this.runService.showRuns('run1').subscribe((val: Run[]) => //send http request and results are subscribed into val
  //   {
  //     console.log("hello from console")
  //     //this.r = val; //send the results the element r 
  //     console.log(val)
  //   })
  // }

  showAllCollections(){  //Placeholder, supposed to implement using listCollections
    this.runService.listCollections().subscribe((val2: RunName[]) => //send http request and results are subscribed into val
    {
      for(var i = 0; i < val2.length; i++)
        this.list_a[i] = (val2[i].runName)
    })
  }

  ngOnInit() {
    this.showAllCollections()
    
  }
  

}
