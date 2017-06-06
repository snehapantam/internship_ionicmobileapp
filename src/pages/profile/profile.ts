import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {DetailPage} from "../login/detail-page";


/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  testRadioOpen:boolean;
  testRadioResult;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,
  public modalCtrl:ModalController) {}



  openTabs(){
    this.navCtrl.push(TabsPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(DetailPage);
    modal.present();
  }
}


