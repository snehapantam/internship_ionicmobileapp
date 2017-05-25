import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Physical} from "../physical/physical";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  physicalPage=Physical;

  constructor(public navCtrl: NavController) {

  }

}
