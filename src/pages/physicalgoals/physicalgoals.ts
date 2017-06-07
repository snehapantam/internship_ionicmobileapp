import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers,Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {GoalsProgressService} from "../../providers/goals_progress-provider";
import {Storage} from "@ionic/storage"

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
  bla: any;

  goals:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService: Http, public goalsProvider: GoalsProgressService,
  public storage:Storage) {


    this.storage.get('id').then((val) => {
      console.log('Your age is', val);
      this.bla=val;

      var userEmail = this.bla + "";
      console.log(userEmail)

      let myHeaders = new Headers();
      myHeaders.set('Content-Type', 'application/json');
      myHeaders.set('Accept', 'text/plain');
      let options = new RequestOptions({ headers: myHeaders, search: userEmail });


      this.httpService.get('/getPhysicalGoals',options)
        .map(res => res.json())
        .subscribe(data => {
          this.goals = data;
          console.log("goals from http",this.goals)
          this.goals = goalsProvider.getProgress(this.goals);
          console.log("modified",this.goals)
        });

    })




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Physicalgoals');
    ;
  }



}
