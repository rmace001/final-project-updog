import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class SearchItem {
    constructor(
        public userid: string,
        public userFisrt: string,
        public userLast: string,
        public userName: string,
        public userPass: string 
    ) {}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
    results: SearchItem[];
    loading: boolean;

    serverURLi = "http://localhost:4000" // this is the server the backend is running from 
    constructor(private http: HttpClient) {
        this.results = [];
    }

    // search(term: string){
    //     let promise = new Promise((resolve, reject) => {
    //         let ourURL = `${this.serverURLi}?term=`
    //     })
    // }

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