import { Injectable } from '@angular/core';
import { RequestOptions, Headers,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  public myHeaders = new Headers({'Content-Type': 'application/json'});
  public myParams = new URLSearchParams();

  //data: any;
  //_favorites: string[] = [];
  //http: Http;
  //apiUrl = 'http://myonlai.com:8080/cssp/dimContent?dimName=Physical';

  constructor(public httpService: Http, public headers: Headers) {
    //console.log('Hello UserData Provider');

    //this.load();

  }

  getUser(user){
    this.myParams.append('id', user.email);
    var options = new RequestOptions({ headers: this.myHeaders, params: this.myParams });
    return this.httpService.get('/addUser', options)
      .map(res => res.json());
  }
  /*load() {
    this.http = this.httpService;


    var response = this.http.get(this.apiUrl).map(res => res.json());
    return response;
  }*/


  /*hasFavorite(sessionName: string): boolean {
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
  };*/



}





