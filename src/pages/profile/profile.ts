import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {Headers,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
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
  user:any;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,
  public modalCtrl:ModalController,private httpService: Http) {
    this.user = {
      name: "",
      password: "",
      email:"",
      role:0,
      major:"",
      minor:""
    }
  }



  openTabs(){
    this.navCtrl.push(TabsPage);
  }
  signup(user) {

    this.httpService
      .post('/addUser', {data: user}, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch();

    console.log(user)
    let modal = this.modalCtrl.create(DetailPage);
    modal.present();
  }
  presentModal(user) {
    let modal = this.modalCtrl.create(DetailPage);
    modal.present();
  }
}


