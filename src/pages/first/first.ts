import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../profile/profile";
import { ModalController } from 'ionic-angular';



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



  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {


  }




  ionViewDidLoad() {

    console.log('ionViewDidLoad First');
  }

  presentModal() {
    let modal = this.modalCtrl.create(Profile);
    modal.present();
  }

}
