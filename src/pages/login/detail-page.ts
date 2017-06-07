import { Component } from '@angular/core';
import {Headers,Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
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
  user:any;
  data:any;
  loginData:any;
  tabsPage=TabsPage


  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService: Http, public modalCtrl:ModalController) {
    this.loginData = {
      email: "",
      password: ""
    }
    this.data = navParams.data.data;
  }

  login(loginData){
    console.log(loginData);

    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');
    let options = new RequestOptions({ headers: myHeaders, search: loginData.email });

    this.httpService.get('/getUser',options)
      .map(res => res.json())
      .subscribe(data => {
        this.user = data[0];

        if(this.user.password == loginData.password){
          this.navCtrl.push(TabsPage);
        }
      });
  }

  presentModal() {
    let modal = this.modalCtrl.create(Profile);
    modal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


}
