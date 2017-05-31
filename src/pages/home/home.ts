import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Physical} from "../physical/physical";
import {Support} from "../support/support";
import {Emotional} from "../emotional/emotional";
import {Spiritual} from "../spiritual/spiritual";
import {Occupational} from "../occupational/occupational";
import {Assessment} from "../assessment/assessment";
import {Intellectual} from "../intellectual/intellectual";
import {Social} from "../social/social";
import {Environmental} from "../environmental/environmental";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  physicalPage=Physical;
  emotionalPage=Emotional;
  spiritualPage=Spiritual;
  occupationalPage=Occupational;
  assessmentPage=Assessment;
  intellectualPage=Intellectual;
  socialPage=Social;
  environmentalPage=Environmental;

  supportPage=Support;

  constructor(public navCtrl: NavController) {

  }

}
