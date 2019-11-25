import { Injectable, ReflectiveInjector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import {toPromise} from 'rxjs';
import {Http, Headers, Response} from '@angular/http';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    id: String;
    firstname: String;
    lastname: String;
    validLog: boolean;

    serverURLi = "http://localhost:4000" // this is the server the backend is running from 
    constructor(private http: HttpClient) {
    }

    getUserPassVeri(user:string, pass:string){
        var url = this.serverURLi +"/validUser/" + user + "/" + pass
        let promise = new Promise((resolve, reject) =>{
            this.http.get(url).toPromise()
            .then((res:User) =>{
                if(res == null){
                    this.validLog = false;
                }
                else{
                    this.firstname = res.Firstname;
                    this.lastname = res.Lastname;
                    this.id = res._id;
                    this.validLog = true;
                }
                resolve();
            },
                mes => {
                    reject(mes);
                }
            )
        })
        return promise;
    }

    postCelltoRun(f:String, l:String, u:String, p:String)
    {
        const q = {
        Firstname: f,
        Lastname: l,
        Username: u,
        Password: p
        }
        console.log("adding person")
        var url = this.serverURLi + "/addCelltoRun1"
        return this.http.post(url, q) // http post to localhost:4000/addCelltoRun1
    }
    getUserID(user, pass)
    {
        var url = this.serverURLi + "/validUser/" + user  + "/" + pass
        return this.http.get(url) 
    }
}