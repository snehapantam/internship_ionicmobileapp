import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {UserData} from "../../providers/user-data";
import {Filter} from "../filter/filter";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  slider: any;
  todopage: string;
  excludeComponents: any[];

  pet: string = "puppies";
  isAndroid: boolean = false;

result:string[]=[];

  constructor(public navCtrl: NavController, public platform: Platform,public navparams:NavParams,
  public modalCtrl:ModalController) {

   this.todopage='todo';




  }



  taskcompleted(){


  }

  deletetodo(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }


}
