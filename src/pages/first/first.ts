import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {Profile} from "../profile/profile";
import { ModalController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AdminPage} from "../admin-page/admin-page";



/**
 * Generated class for the First page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class First {

  adminpage=AdminPage;

  showSkip = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {


  }

 tabspage=TabsPage;

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad First');
  }

  presentModal() {
    let modal = this.modalCtrl.create(Profile);
    modal.present();
  }

}
