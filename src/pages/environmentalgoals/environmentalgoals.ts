import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoalsProgressService} from "../../providers/goals_progress-provider";

/**
 * Generated class for the Environmentalgoals page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-environmentalgoals',
  templateUrl: 'environmentalgoals.html',
})
export class Environmentalgoals {
  goals: any;
  date: any;
  final_score:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public goalsProgress: GoalsProgressService) {
    goalsProgress.getProgress(this.goals);
    this.date = new Date();
    this.goals ={
        name: "sample goals",
        type: 0,
        start_time: "2017-06-01",
        planned_end_time:"2017-11-01",
        actual_end_time:"2017-06-05",
        progress:100,
        final_score:null
      }



  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Environmentalgoals');
  }

}
