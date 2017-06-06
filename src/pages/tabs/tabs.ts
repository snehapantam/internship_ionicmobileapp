import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import {Profile} from "../profile/profile";
import {AboutPage} from "../todo/about";
import {ContactPage} from "../events/contact";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Profile;



  constructor() {

  }
}
