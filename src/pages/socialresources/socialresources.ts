import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {Http} from "@angular/http";

/**
 * Generated class for the Socialresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-socialresources',
  templateUrl: 'socialresources.html',
})
export class Socialresources {
  [name: string]: any;
  clubs: any;
  phoneNumber: number;
  categories:any;
  mapPage = Map;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: Http,
              public alertCtrl: AlertController,
              public callNumber: CallNumber, public toastCtrl: ToastController) {

    this.categories = [];
    this.httpService.get('/getSocialClubs')
      .map(res => res.json())
      .subscribe(data => {
        this.clubs = data;
        for(var i=0;i<this.clubs.length;i++){
          console.log(this.clubs[i].categories,this.categories.indexOf(this.clubs[i].categories))
          if(this.categories.indexOf(this.clubs[i].categories)== -1){
            this.categories.push(this.clubs[i].categories)
          }
        }
        this.categories = ["abd","dfg","gdrh"]
        console.log("categories", this.categories);
      });

    this.segment = this.navParams.get('name');
    this.physical = this.segment;
    this.segment = this.navParams.get('name');

    this.physical = this.segment;


    this.phoneNumber = 9094874493;
    /**put the phone number here.*/


  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Added in To do list',
      duration: 3000
    });
    toast.present();
  }

  call() {
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Socialresources');
  }


}
