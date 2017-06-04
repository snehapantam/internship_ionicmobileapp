import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Assessmentresources} from "../assessmentresources/assessmentresources";
import {Http} from "@angular/http";
import {Assessmentgoals} from "../assessmentgoals/assessmentgoals";

/**
 * Generated class for the Assessment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html',
})
export class Assessment {

  segment: any;
  data: any;
  assessmentgoals=Assessmentgoals


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Assessmentresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Assessment');
  }

}
