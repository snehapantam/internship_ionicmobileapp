import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserData} from "../../providers/user-data";
import {Http} from "@angular/http";
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the Emotionalresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emotionalresources',
  templateUrl: 'emotionalresources.html',
})
export class Emotionalresources {
  [name: string]: any;

  phoneNumber:number;

  mapPage = Map;




  selectedSegment: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, httpService: Http,
              public alertCtrl: AlertController,
              public service: UserData,
              public callNumber:CallNumber) {

    this.segment= this.navParams.get('name');

    this.emotional=this.segment;


    this.phoneNumber=9094874493; /**put the phone number here.*/




  }


  call() {
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Emotionalresources');
  }

}
