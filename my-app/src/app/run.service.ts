import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  runName = ""
  serverURLi = "http://localhost:4000" // this is the server the backend is running from 
  constructor(private http: HttpClient) {}
  showRuns(run: string)
  {
    var url = this.serverURLi + "/listFromRun/" + run
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showScores(run: string)
  {
    var url = this.serverURLi + "/listScoresAndEventName/" + run
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showOutcomeTopics(run: string)
  {
    var url = this.serverURLi + "/listOutcomes/" + run
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showEventNames(run: string)
  {
    var url = this.serverURLi + "/listEvents/" + run
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showScoreWithNames(r, e, o)
  {
    var url = this.serverURLi + "/listScorewithEventAndOutcome/" + r + "/" + e  + "/" + o
    return this.http.get(url) 
  }
  listCollections()
  {
    var url = this.serverURLi + "/listCollections"
    return this.http.get(url)
  }
  showEventswithSpecs(r, y, b)
  {
    var url = this.serverURLi + "/listEventswithSpecifics/" + r + "/" + y  + "/" + b
    return this.http.get(url) 
  }
  showRunwithSpecs(r,y,b)
  {
    var url = this.serverURLi + "/listRunWithSpecifics/" + r + "/" + y  + "/" + b
    return this.http.get(url) 
  }

//   postCelltoRun(b:Number, y:Number, e:String, o:String, s:Number)
//   {
//     const p = {
//       Block: b,
//       Year: y,
//       Event: e,
//       OutcomeTopic: o,
//       Score: s
//     }
//     //console.log("adding person")
//     var url = this.serverURLi + "/addCelltoRun1"
//     return this.http.post(url, p) // http post to localhost:4000/addCelltoRun1
//   }
}