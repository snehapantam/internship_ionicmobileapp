import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Physicalresources} from "../physicalresources/physicalresources";

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



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
  public dunno:string
navigate(dunno){
  this.navCtrl.push(Physicalresources, {
    thing1: dunno

  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Physical');
  }



}
