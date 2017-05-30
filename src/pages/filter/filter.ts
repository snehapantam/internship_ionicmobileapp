import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserData} from "../../providers/user-data";

/**
 * Generated class for the Filter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class Filter {


  constructor(public navCtrl: NavController, public navParams: NavParams, public service: UserData,public viewCtrl:ViewController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Filter');
  }


}
