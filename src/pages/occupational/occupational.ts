import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Occupationalresources} from "../occupationalresources/occupationalresources";
import {Http} from "@angular/http";

/**
 * Generated class for the Occupational page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-occupational',
  templateUrl: 'occupational.html',
})
export class Occupational {

  segment: any;
  data: any;

  occupationalresources=Occupationalresources;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }


  navigate(segment){
    this.navCtrl.push(Occupationalresources,{
      name:segment})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Occupational');
  }

}
