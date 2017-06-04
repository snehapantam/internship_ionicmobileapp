import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Environmentalresources} from "../environmentalresources/environmentalresources";
import {Http} from "@angular/http";
import {Environmentalgoals} from "../environmentalgoals/environmentalgoals";

/**
 * Generated class for the Environmental page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-environmental',
  templateUrl: 'environmental.html',
})
export class Environmental {

  segment: any;
  data: any;
  environmentalgoals=Environmentalgoals


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Environmentalresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Environmental');
  }

}
