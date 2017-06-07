import { Component } from '@angular/core';
import {
  AlertController, IonicPage, ModalController, NavController, NavParams, PopoverController,
  ToastController
} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import {Http} from "@angular/http";
import {Intro} from "../intro/intro";
import * as _ from 'underscore';

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
              public callNumber: CallNumber, public toastCtrl: ToastController,public popoverCtrl:PopoverController,
  public modalCtrl:ModalController) {

    this.httpService.get('/getSocialClubs')
      .map(res => res.json())
      .subscribe(data => {
        this.clubs = data;
        for(var i=0;i<this.clubs.length;i++){
          var index = _.indexOf(this.categories,this.clubs[i].categories);
          if(!index){
            this.categories.push(this.clubs[i].categories);
          }
        }
        console.log(this.categories);
        console.log("data", data);
      });

    this.segment = this.navParams.get('name');
    this.physical = this.segment;
    this.segment = this.navParams.get('name');

    this.physical = this.segment;





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

  presentModal() {
    let modal = this.modalCtrl.create(Intro);
    modal.present();
  }



}
