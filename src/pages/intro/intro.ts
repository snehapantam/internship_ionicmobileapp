import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Physical} from "../physical/physical";

/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {
  physicalpage=Physical;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

}
