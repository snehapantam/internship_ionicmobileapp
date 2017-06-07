var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { UserData } from "../../providers/user-data";
import { Filter } from "../filter/filter";
var AboutPage = (function () {
    function AboutPage(navCtrl, platform, navparams, service, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navparams = navparams;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.pet = "puppies";
        this.isAndroid = false;
        this.result = [];
        this.todopage = 'todo';
    }
    AboutPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(Filter, this.excludeComponents);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeComponents = data;
            }
        });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad About');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Component({
        selector: 'page-about',
        templateUrl: 'about.html'
    }),
    __metadata("design:paramtypes", [NavController, Platform, NavParams, UserData,
        ModalController])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.js.map