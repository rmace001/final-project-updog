import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.app.hide();
  }

  validationCheck(){
    var fr = new String(document.getElementById("inputFirst"));
    var lt = new String(document.getElementById("inputLast"));
    var us = new String(document.getElementById("inputUser"));
    var pw = new String(document.getElementById("inputPass"));
    var opw = new String(document.getElementById("inputOtherPass"));
    var val:boolean = false;
    if((fr.length <= 1)){
      alert("First name must be at least 2 characters long.");
    }
    else if(lt.length <= 1){
      alert("Last name must be at least 2 characters long.");
    }
    else if(us.length < 6){
      alert("Username must be at least 6 characters long.");
    }
    else if(pw.length < 6){
      alert("Passwords must be at least 6 characters long.");
      if(pw != opw){
        alert("Re-typed password does not match the first password entered.");
      }
    }
    else{
      alert("Your account has been created!");
      val = true;
    }
    return val;
  }
}
