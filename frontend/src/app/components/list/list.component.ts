import { Component, OnInit } from '@angular/core';
import { RunService } from '../../run.service'
import { Run } from '../../run.model'
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private runService: RunService, private router: Router) { }
  r: Run[] // class has element r of type array of Runs
  displayColumns = ['block', 'year', 'event', 'outcome topic', 'score'] // needed for UI table..?
  // displayOutcomes()
  // {
  //   this.runService.showOutcomeTopics().subscribe((val)=>{
  //     console.log(val)
  //     console.log(this.runService.passVariable)
  //   })
  // }
  goToedit()
  {
    console.log("got to edit")
    this.runService.passVariable = "pASS SUCEEDed"
    this.router.navigateByUrl("/edit/run")
  }
  ngOnInit() {
    //console.log("should print in list init")
    //this.displayOutcomes()
    //this.AddCellToRun()
    //console.log(this.r)
    this.goToedit()
  }
}
