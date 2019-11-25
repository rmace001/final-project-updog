import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {LoginComponent} from '../login/login.component'
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  showSpinner: boolean = false;
  first: String
  last: String

  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    }, 6000);
  }
  constructor(public app: AppComponent, private User: UserService) { }

  ngOnInit() {
    this.app.show();
    console.log(this.User.firstname);
    console.log(this.User.lastname);
  }

  countClick(){
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
}
