import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Physical} from "../physical/physical";
import {Support} from "../support/support";
import {Emotional} from "../emotional/emotional";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  physicalPage=Physical;
  emotionalPage=Emotional;
  supportPage=Support;

  constructor(public navCtrl: NavController) {

  }

}
