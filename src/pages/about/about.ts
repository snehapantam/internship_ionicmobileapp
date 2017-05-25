import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pet: string = "puppies";
  isAndroid: boolean = false;



  constructor(public navCtrl: NavController, public platform: Platform,public navparams:NavParams) {



  }




}
