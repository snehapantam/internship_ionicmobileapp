var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { First } from "../pages/first/first";
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Profile } from "../pages/profile/profile";
import { Intro } from "../pages/intro/intro";
import { Physical } from "../pages/physical/physical";
import { Emotional } from "../pages/emotional/emotional";
import { Physicalresources } from "../pages/physicalresources/physicalresources";
import { Map } from "../pages/map/map";
import { HttpModule } from "@angular/http";
import { DetailPage } from "../pages/detail-page/detail-page";
import { UserData } from "../providers/user-data";
import { IonicStorageModule } from "@ionic/storage";
import { Filter } from "../pages/filter/filter";
import { Support } from "../pages/support/support";
import { CallNumber } from "@ionic-native/call-number";
import { AdminPage } from "../pages/admin-page/admin-page";
import { AddResource } from "../pages/add-resource/add-resource";
import { Emotionalresources } from "../pages/emotionalresources/emotionalresources";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            First,
            Profile,
            Intro, Physical, Emotional,
            Physicalresources,
            Map,
            DetailPage,
            Filter,
            Support,
            AdminPage,
            AddResource,
            Emotional,
            Emotionalresources
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
            Intro, Physical, Emotional, Physicalresources, Map, DetailPage, Filter, Support, AdminPage, AddResource, Emotional, Emotionalresources
        ],
        providers: [
            StatusBar,
            SplashScreen,
            Geolocation,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            UserData,
            CallNumber
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map