import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers,Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {GoalsProgressService} from "../../providers/goals_progress-provider";

/**
 * Generated class for the Physicalgoals page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-physicalgoals',
  templateUrl: 'physicalgoals.html',
})
export class Physicalgoals {

  goals:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService: Http, public goalsProvider: GoalsProgressService) {
    var userEmail = "4"

    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');
    let options = new RequestOptions({ headers: myHeaders, search: userEmail });


    this.httpService.get('/getPhysicalGoals',options)
      .map(res => res.json())
      .subscribe(data => {
        this.goals = data;
        this.goals = goalsProvider.getProgress(this.goals);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Physicalgoals');
  }

}
