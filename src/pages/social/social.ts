import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Socialresources} from "../socialresources/socialresources";
import {Http} from "@angular/http";

/**
 * Generated class for the Social page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class Social {

  segment: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Socialresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Social');
  }

}
