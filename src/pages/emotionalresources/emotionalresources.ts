import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
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
  clubs: any;
  resources: any;
  workshops:any;
  tutorials:any;
  phoneNumber:number;
  mapPage = Map;
  selectedSegment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: Http,
              public alertCtrl: AlertController,
              public callNumber:CallNumber) {

    this.httpService.get('/getEmotionalClubs')
      .map(res => res.json())
      .subscribe(data => {
        this.clubs = data;
        console.log("data" , data);
      });

    this.httpService.get('/getEmotionalResources')
      .map(res => res.json())
      .subscribe(data => {
        this.resources = data;
        console.log("data" , data);
      });

    this.httpService.get('/getEmotionalWorkshops')
      .map(res => res.json())
      .subscribe(data => {
        this.workshops= data;
        console.log("data" , data);
      });

    this.httpService.get('/getEmotionalTutorials')
      .map(res => res.json())
      .subscribe(data => {
        this.tutorials = data;
        console.log("data" , data);
      });

    this.segment= this.navParams.get('name');

    this.emotional=this.segment;

    this.phoneNumber=9094874493; /**put the phone number here.*/




  }


  call(phone) {
    console.log('phone');
    this.phoneNumber = phone;
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Emotionalresources');
  }

}
