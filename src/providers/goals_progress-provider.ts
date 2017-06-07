import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoalsProgressService {
  httpService: any;
  data: any;
  http:Http;
  favorites: string[] = [];
  constructor() {

  }

  getProgress(goals){
    console.log(goals)
    for(var i=0;i<goals.length;i++){
      if(goals[i].progress != 100){
        goals[i].final_score = 0.0;
      }
      if(goals[i].planned_end_time > goals[i].actual_end_time){
        goals[i].final_score = 100
      }else if (goals[i].actual_end_time - goals[i].planned_end_time <= 60*60*24){
        goals[i].final_score = 50
      }else
        goals[i].final_score = 0;

      console.log(goals[i].final_score)
    }
    return goals;
  }
}
