import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../profile/profile";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html',
})
export class DetailPage {

  data:any;
  tabsPage=TabsPage

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {

  }

  login(){

  }

  presentModal() {
    let modal = this.modalCtrl.create(Profile);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
