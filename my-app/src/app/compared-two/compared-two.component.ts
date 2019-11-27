import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
import { Router, ChildActivationEnd } from '@angular/router'
import { MatSort, MatSortable, MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-compared-two',
  templateUrl: './compared-two.component.html',
  styleUrls: ['./compared-two.component.scss']
})
export class ComparedTwoComponent implements OnInit {

  constructor(private runService: RunService, private router: Router, public app: AppComponent) { }
  r: Run[] 
  ngOnInit() {
    this.app.show();
  }

}
