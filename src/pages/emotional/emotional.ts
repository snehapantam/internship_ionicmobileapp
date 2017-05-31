import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Emotionalresources} from "../emotionalresources/emotionalresources";

/**
 * Generated class for the Emotional page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emotional',
  templateUrl: 'emotional.html',
})
export class Emotional {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigate(segment){
    this.navCtrl.push(Emotionalresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Emotional');
  }

}
