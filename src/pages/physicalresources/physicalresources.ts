import {Component, ViewChild} from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, NavController, NavParams, Slides,
  ToastController,
} from 'ionic-angular';
import {Map} from "../map/map";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {AboutPage} from "../about/about";
import {DetailPage} from "../detail-page/detail-page";
import {UserData} from "../../providers/user-data"
import {CallNumber} from "@ionic-native/call-number";




/**
 * Generated class for the Physicalresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-physicalresources',
  templateUrl: 'physicalresources.html',
})
export class Physicalresources {
  [name: string]: any;
  http: Http;
  phoneNumber:number;

  mapPage = Map;


  @ViewChild('mySlider')
  slider: Slides;
  selectedSegment: string;
  slides: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, httpService: Http,
              public alertCtrl: AlertController,
              public service: UserData,
  public callNumber:CallNumber, public toastCtrl:ToastController) {

this.segment= this.navParams.get('name');

this.physical=this.segment;


    this.phoneNumber=9094874493; /**put the phone number here.*/




  }

presentToast(){
    let toast=this.toastCtrl.create({
      message:'Added in To do list',
      duration:3000
    });
    toast.present();
}
  call() {
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicalResources');
  }
}


