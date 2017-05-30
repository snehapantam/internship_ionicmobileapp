import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  data: any;
  _favorites: string[] = [];
  http: Http;
  apiUrl = 'http://myonlai.com:8080/cssp/dimContent?dimName=Physical';

  constructor(public httpService: Http,) {
    console.log('Hello UserData Provider');

    this.load();

  }


  load() {
    this.http = this.httpService;


    var response = this.http.get(this.apiUrl).map(res => res.json());
    return response;
  }


  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.unshift(sessionName);
    console.log(this._favorites)
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
      console.log(this._favorites)
    }
  };



}





