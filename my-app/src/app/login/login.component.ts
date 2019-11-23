import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service'
import { Router, RouterLink } from '@angular/router'
import { User } from '../user.model'
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,public app: AppComponent) { }
  id: String
  temp: boolean
  checker= []
  ngOnInit() {
    this.app.hide();
    //this.loginValid();
  }

  loginValid(){

    console.log("HELLO FROM LOGIN")
    var u:string = (<HTMLInputElement>document.getElementById("loginUser")).value;
    var p:string = (<HTMLInputElement>document.getElementById("loginPassword")).value;
    this.userService.getUserID(u,p).subscribe((val: User)=>
    {
      this.id = val._id
      if(this.id != null){
        this.checker[0] = true
      }
      else{
        this.checker[0]= false
      }
    });
  }
}
