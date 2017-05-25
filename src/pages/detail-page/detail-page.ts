import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
