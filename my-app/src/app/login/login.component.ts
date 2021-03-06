import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service'
import { Router, RouterLink } from '@angular/router'
import { User } from '../user.model'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RunService } from '../run.service';

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
    //console.log(this.userService.firstname)

  }

  redirectFunc(){
    this.userService.lastname = this.userService.lastname
    this.userService.firstname = this.userService.firstname
    this.userService.id = this.userService.id

    this.router.navigateByUrl("/home")
    //window.location.href ='/home';
  }

  loginValid(){

    console.log("HELLO FROM LOGIN")
    var u:string = (<HTMLInputElement>document.getElementById("loginUser")).value;
    var p:string = (<HTMLInputElement>document.getElementById("loginPassword")).value;
    if((u == "") || (p == "")){
      alert("One or more fields cannot be left blank!")
    }
    else{
      this.userService.getUserPassVeri(u,p).then(
        ()=>{
          if(this.userService.validLog){
            this.checker = true;
            // this.name = this.userService.firstname;
            // this.ofHouse = this.userService.lastname;
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
