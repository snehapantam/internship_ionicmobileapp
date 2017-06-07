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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Physicalresources } from "../physicalresources/physicalresources";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Physical page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Physical = (function () {
    function Physical(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.physicalresources = Physicalresources;
    }
    Physical.prototype.navigate = function (segment) {
        this.navCtrl.push(Physicalresources, {
            name: segment
        });
    };
    Physical.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Physical');
    };
    return Physical;
}());
Physical = __decorate([
    IonicPage(),
    Component({
        selector: 'page-physical',
        templateUrl: 'physical.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Http])
], Physical);
export { Physical };
//# sourceMappingURL=physical.js.map