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
  checker: boolean = false
  ofHouse: String
  name: String
  ngOnInit() {
    this.app.hide();

  }

  redirectFunc(){
    window.location.href ='/home';
  }

  loginValid(){

    console.log("HELLO FROM LOGIN")
    var u:string = (<HTMLInputElement>document.getElementById("loginUser")).value;
    var p:string = (<HTMLInputElement>document.getElementById("loginPassword")).value;
    this.userService.getUserPassVeri(u,p).then(
      ()=>{
        if(this.userService.validLog){
          this.checker = true;
          this.name = this.userService.firstname;
          this.ofHouse = this.userService.lastname;
          console.log("valid")
        }
        else{
          this.checker = false;
          alert("Invald username or password");
          console.log("not user")
        }
      },
      // ()=>
      // {
      //   alert("Error code: 423535");
      //   console.log("we're fucked idk how to fix")
      // }
    )
  }
  loginGuest(){

    console.log("HELLO FROM guest")
    var u:string = "guest00";
    var p:string = "guest00";
    this.userService.getUserPassVeri(u,p).then(
      ()=>{
        if(this.userService.validLog){
          this.checker = true;
          this.name = "user";
          this.ofHouse = "guest"
          console.log("valid")
        }
        else{
          this.checker = false;
          alert("Invald username or password");
          console.log("not user")
        }
      },
      // ()=>
      // {
      //   alert("Error code: 423535");
      //   console.log("we're fucked idk how to fix")
      // }
    )
  }
}
