
import { Component, OnInit, ViewChild, AfterViewInit,OnDestroy} from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
import { AppComponent } from '../app.component';

import { Router, ChildActivationEnd } from '@angular/router'
import { RunService } from '../run.service' 
import { Run, OutcomeList} from '../run.model'
@Component({
  selector: 'app-topscore',
  templateUrl: './topscore.component.html',
  styleUrls: ['./topscore.component.scss']
})
export class TopscoreComponent implements OnInit {
   top10 = []
   top20 = []
   top30 = []
   radioChoice
   outcomename
  constructor(private runService: RunService, public app: AppComponent) { }

  ngOnInit() {
    this.app.show();
    this.outcomename = this.runService.outcomeName
    this.top10  = this.runService.top10score 
    this.top20  = this.runService.top20score 
    this.top30  = this.runService.top30score 
  }

}
