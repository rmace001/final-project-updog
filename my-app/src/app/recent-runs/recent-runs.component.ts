import { Component, OnInit } from '@angular/core';

export interface Headers {
  id: number;
  name: string;
  something: string;
}

const ELEMENT_DATA: Headers[] = [
  {id: 1, name: 'Mark', something: 'asf'},
  {id: 2, name: 'Alex', something: 'wf'},
  {id: 3, name: 'Rodrigo', something: 'fwv'},
  {id: 4, name: 'Peter', something: 'kvf'},
  {id: 5, name: 'Anguy', something: 'wdf'},
];


@Component({
  selector: 'app-recent-runs',
  templateUrl: './recent-runs.component.html',
  styleUrls: ['./recent-runs.component.scss']
})
export class RecentRunsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['id', 'name', 'something'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
