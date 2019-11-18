import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bloop',
  templateUrl: './bloop.component.html',
  styleUrls: ['./bloop.component.scss']
})
export class BloopComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.app.show();
  }
  

}
