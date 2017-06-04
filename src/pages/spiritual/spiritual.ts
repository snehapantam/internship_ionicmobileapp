import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Spiritualresources} from "../spiritualresources/spiritualresources";
import {Http} from "@angular/http";
import {Spiritualgoals} from "../spiritualgoals/spiritualgoals";

/**
 * Generated class for the Spiritual page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-spiritual',
  templateUrl: 'spiritual.html',
})
export class Spiritual {

  segment: any;
  data: any;
  spiritualgoals=Spiritualgoals

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Spiritualresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Spiritual');
  }

}
