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
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { CallNumber } from "@ionic-native/call-number";
/**
 * Generated class for the Emotionalresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Emotionalresources = (function () {
    function Emotionalresources(navCtrl, navParams, httpService, alertCtrl, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.mapPage = Map;
        this.httpService.get('/getEmotionalClubs')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.clubs = data;
            console.log("data", data);
        });
        this.segment = this.navParams.get('name');
        this.emotional = this.segment;
        this.phoneNumber = 9094874493; /**put the phone number here.*/
    }
    Emotionalresources.prototype.call = function () {
        this.callNumber.callNumber(String(this.phoneNumber), true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    Emotionalresources.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Emotionalresources');
    };
    return Emotionalresources;
}());
Emotionalresources = __decorate([
    IonicPage(),
    Component({
        selector: 'page-emotionalresources',
        templateUrl: 'emotionalresources.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Http,
        AlertController,
        CallNumber])
], Emotionalresources);
export { Emotionalresources };
//# sourceMappingURL=emotionalresources.js.map