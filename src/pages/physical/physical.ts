import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Physicalresources} from "../physicalresources/physicalresources";
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Physical page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-physical',
  templateUrl: 'physical.html',
})
export class Physical {
  segment: any;
  data: any;

  physicalresources=Physicalresources;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


    }


    navigate(segment){
    this.navCtrl.push(Physicalresources,{
    name:segment})
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Physical');
  }



}
