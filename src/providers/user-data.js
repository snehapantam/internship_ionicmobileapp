var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserData = (function () {
    function UserData(httpService) {
        this.httpService = httpService;
        this._favorites = [];
        this.apiUrl = 'http://myonlai.com:8080/cssp/dimContent?dimName=Physical';
        console.log('Hello UserData Provider');
        this.load();
    }
    UserData.prototype.load = function () {
        this.http = this.httpService;
        var response = this.http.get(this.apiUrl).map(function (res) { return res.json(); });
        return response;
    };
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.unshift(sessionName);
        console.log(this._favorites);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
            console.log(this._favorites);
        }
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserData);
export { UserData };
//# sourceMappingURL=user-data.js.map