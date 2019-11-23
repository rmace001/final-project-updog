import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  serverURLi = "http://localhost:4000" // this is the server the backend is running from 
  constructor(private http: HttpClient) {}
  showRuns()
  {
    var url = this.serverURLi + "/listFromRun"
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showScores()
  {
    var url = this.serverURLi + "/listScoresAndEventName"
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showOutcomeTopics()
  {
    var url = this.serverURLi + "/listOutcomes"
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showEventNames()
  {
    var url = this.serverURLi + "/listEvents"
    return this.http.get(url) // http get from localhost:4000/listFromRun1
  }
  showScoreWithNames(e, o)
  {
    var url = this.serverURLi + "/listScorewithEventAndOutcome/" + e  + "/" + o
    return this.http.get(url) 
  }
}