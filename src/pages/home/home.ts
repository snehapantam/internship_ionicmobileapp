import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Physical} from "../physical/physical";
import {Support} from "../support/support";
import {Emotional} from "../emotional/emotional";
import {Spiritual} from "../spiritual/spiritual";
import {Occupational} from "../occupational/occupational";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  physicalPage=Physical;
  emotionalPage=Emotional;
  spiritualPage=Spiritual;
  occupationalPage=Occupational;

  supportPage=Support;

  constructor(public navCtrl: NavController) {

  }

}
