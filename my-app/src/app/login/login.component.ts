import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RunService } from '../run.service'
import { Router } from '@angular/router'
import { User } from '../user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private runService: RunService, private router: Router,public app: AppComponent) { }
  id: String
  ngOnInit() {
    this.app.hide();
    //this.loginValid();
  }
  checker(){
    var check:boolean = this.loginValid();
    console.log(check)
  }

  loginValid(){
    console.log("HELLO FROM LOGIN")
    var u:string = (<HTMLInputElement>document.getElementById("loginUser")).value;
    var p:string = (<HTMLInputElement>document.getElementById("loginPassword")).value;
    this.runService.getUserID(u,p).subscribe((val: User)=>
    {
      this.id = val._id
      if(this.id != null){
        return true;
      }
    })
    return false;
  }

}
