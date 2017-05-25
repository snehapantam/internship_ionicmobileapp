import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {First} from "../pages/first/first"
import {Geolocation} from '@ionic-native/geolocation'




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Profile} from "../pages/profile/profile";
import {Intro} from "../pages/intro/intro";
import {Physical} from "../pages/physical/physical";
import {Emotional} from "../pages/emotional/emotional";
import {Physicalresources} from "../pages/physicalresources/physicalresources";
import {Map} from "../pages/map/map";
import {HttpModule} from "@angular/http";
import {DetailPage} from "../pages/detail-page/detail-page";
import {UserData} from "../providers/user-data";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    First,
    Profile,
    Intro,Physical,Emotional,Physicalresources,Map,DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    First,
    Profile,
    Intro,Physical,Emotional,Physicalresources,Map,DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData
  ]
})
export class AppModule {}
