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
import {Filter} from "../pages/filter/filter";
import {Support} from "../pages/support/support";
import {CallNumber} from "@ionic-native/call-number";
import {AdminPage} from "../pages/admin-page/admin-page";
import {AddResource} from "../pages/add-resource/add-resource";
import {Emotionalresources} from "../pages/emotionalresources/emotionalresources";
import {Occupational} from "../pages/occupational/occupational";
import {Occupationalresources} from "../pages/occupationalresources/occupationalresources";
import {Spiritual} from "../pages/spiritual/spiritual";
import {Spiritualresources} from "../pages/spiritualresources/spiritualresources";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    First,
    Profile,
    Intro,
    Map,
    DetailPage,
    Filter,
    Support,
    AdminPage,
    AddResource,
    Physical, Physicalresources,
    Emotional, Emotionalresources,
    Occupational, Occupationalresources,
    Spiritual, Spiritualresources
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
    Intro,Physical,Emotional,Physicalresources,Map,DetailPage,Filter,Support,AdminPage,AddResource,Emotional,Emotionalresources,
    Occupational,
    Occupationalresources,
    Spiritual,
    Spiritualresources
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    CallNumber,

  ]
})
export class AppModule {}
