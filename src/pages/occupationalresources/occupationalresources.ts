import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {Http} from "@angular/http";

/**
 * Generated class for the Occupationalresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-occupationalresources',
  templateUrl: 'occupationalresources.html',
})
export class Occupationalresources {
  clubs: any;
  phoneNumber:number;
  segment:any;
  occupational:any;
  resources:any;
  workshops:any;
  tutorials:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: Http,
              public alertCtrl: AlertController,

              public callNumber:CallNumber, public toastCtrl:ToastController) {

    this.httpService.get('/getOccupationalClubs')
      .map(res => res.json())
      .subscribe(data => {
        this.clubs = data;
        console.log("data" , data);
      });

    this.httpService.get('/getOccupationalResources')
      .map(res => res.json())
      .subscribe(data => {
        this.resources = data;
        console.log("data" , data);
      });

    this.httpService.get('/getOccupationalWorkshops')
      .map(res => res.json())
      .subscribe(data => {
        this.workshops = data;
        console.log("data" , data);
      });

    this.httpService.get('/getOccupationalTutorials')
      .map(res => res.json())
      .subscribe(data => {
        this.tutorials = data;
        console.log("data" , data);
      });

    this.segment= this.navParams.get('name');
    this.occupational=this.segment;
    this.segment = this.navParams.get('name');

    this.occupational = this.segment;


    /**put the phone number here.*/




  }


  presentToast(){
    let toast=this.toastCtrl.create({
      message:'Added in To do list',
      duration:3000
    });
    toast.present();
  }
  call(phone) {
    console.log('phone');
    this.phoneNumber = phone;
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Occupationalresources');
  }

}
