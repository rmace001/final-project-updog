import { Component, OnInit } from '@angular/core';
import { RunService } from '../../run.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private runService: RunService) { }
  ngOnInit() {
    console.log(this.runService.passVariable)
    this.runService.passVariable = ""
  }

}
