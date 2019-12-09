import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  runName = ""
  outcomeName = ""
  outcomeNamelist =[]
  scorelist = []
  count_score = []
  top10score = []
  top20score = []
  top30score = []
  serverURLi = "http://localhost:4000" 
  constructor(private http: HttpClient) {}
  showRuns(run: string)
  {
    var url = this.serverURLi + "/listFromRun/" + run
    return this.http.get(url)
  }
  showScores(run: string)
  {
    var url = this.serverURLi + "/listScoresAndEventName/" + run
    return this.http.get(url) 
  }
  showOutcomeTopics(run: string)
  {
    var url = this.serverURLi + "/listOutcomes/" + run
    return this.http.get(url)
  }
  showEventNames(run: string)
  {
    var url = this.serverURLi + "/listEvents/" + run
    return this.http.get(url) 
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
}