import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RunService } from '../run.service'
import { Run } from '../run.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  isValid: boolean;
  constructor(private runService: RunService, private router: Router,public app: AppComponent) { }
  r: Run[]

  ngOnInit() {
    this.app.hide();
    
  }

  inputClear(){
    (<HTMLInputElement>document.getElementById("inputFirst")).value = "";
    (<HTMLInputElement>document.getElementById("inputLast")).value = "";
    (<HTMLInputElement>document.getElementById("inputUser")).value = "";
    (<HTMLInputElement>document.getElementById("inputPass")).value = "";
    (<HTMLInputElement>document.getElementById("inputOtherPass")).value = "";
  }

  validationCheck(){
    var fr = (<HTMLInputElement>document.getElementById("inputFirst")).value;
    var lt = (<HTMLInputElement>document.getElementById("inputLast")).value;
    var us = (<HTMLInputElement>document.getElementById("inputUser")).value;
    var pw = (<HTMLInputElement>document.getElementById("inputPass")).value;
    var opw = (<HTMLInputElement>document.getElementById("inputOtherPass")).value;
    //list for first name = [i]
    //list for last name = [i]
    //list for user = [i]
    //list for password = [i]
    if((fr.length) <= 1){
      alert("First name must be at least 2 characters long.");
      this.isValid = false;
    }
    else if((lt.length) <= 1){
      alert("Last name must be at least 2 characters long.");
      this.isValid = false;
    }
    else if((us.length) < 6){
      alert("Username must be at least 6 characters long.");
      this.isValid = false;
    }
    else if((pw.length) < 6){
      alert("Passwords must be at least 6 characters long.");
      this.isValid = false;
    }
    else if(pw != opw){
      alert("Re-typed password does not match the first password entered.");
      this.isValid = false;
    }
    else{
      alert("Your account has been created!");
      this.isValid = true;
      this.runService.postCelltoRun(fr,lt,us,pw).subscribe(
        data =>{console.log(fr + " " + lt + " " + us + " " + pw)},
        error =>{console.log("Error", error)}
        )
      this.inputClear();
    }
    return this.isValid;
  }
}
