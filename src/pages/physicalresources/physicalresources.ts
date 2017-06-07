import {Component, ViewChild} from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Slides, ToastController,} from 'ionic-angular';
import {Map} from "../map/map";
import {Headers,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
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
  clubs: any;
  resources:any;
  phoneNumber:number;
  private headers = new Headers({'Content-Type': 'application/json'});
  mapPage = Map;
  data:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: Http,
              public alertCtrl: AlertController,

  public callNumber:CallNumber, public toastCtrl:ToastController) {


    this.httpService.get('/getPhysicalClubs')
      .map(res => res.json())
      .subscribe(data => {
        this.clubs = data;
      });

    this.httpService.get('/getPhysicalRecources')
      .map(res => res.json())
      .subscribe(data => {
        this.resources = data;
      });

    this.segment= this.navParams.get('name');
    this.physical=this.segment;
    this.segment = this.navParams.get('name');

    this.physical = this.segment;



    /**put the phone number here.*/




  }


presentToast(){
    let toast=this.toastCtrl.create({
      message:'Added in To do list',
      duration:3000
    });
    toast.present();
}
  call(phone) {
  console.log('phone');
    this.phoneNumber = phone;
    this.callNumber.callNumber(String(this.phoneNumber), true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicalResources');
  }
}


