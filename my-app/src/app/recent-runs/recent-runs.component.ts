import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
export interface Headers {
  id: number;
  name: string;
  score: string;
}

const ELEMENT_DATA: Headers[] = [
  {id: 1, name: 'BIO-124', score: '0.3'},
  {id: 2, name: 'HUMAN ANATOMY', score: '0.6'},
  {id: 3, name: 'ORGANIC CHEMISTRY', score: '0.3'},
  {id: 4, name: 'Physiology-001', score: '0.2'},
  {id: 5, name: 'Human Genetics', score: '0.2'},
];


@Component({
  selector: 'app-recent-runs',
  templateUrl: './recent-runs.component.html',
  styleUrls: ['./recent-runs.component.scss']
})
export class RecentRunsComponent implements OnInit {

  constructor(public app: AppComponent) { }

  displayedColumns: string[] = ['id', 'name', 'score'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.app.show();
    console.log("hi from recent")
  }

}
