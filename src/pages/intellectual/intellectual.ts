import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Intellectualresources} from "../intellectualresources/intellectualresources";
import {Http} from "@angular/http";

/**
 * Generated class for the Intellectual page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intellectual',
  templateUrl: 'intellectual.html',
})
export class Intellectual {
  segment: any;
  data: any;

  intellectualresources=Intellectualresources
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Intellectualresources,{
      name:segment})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Intellectual');
  }

}
