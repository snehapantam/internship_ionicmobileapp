import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhysicalService {
  httpService: any;
  data: any;
  http:Http;

  constructor(public httpservice: Http) {
    this.getClubs();
  }

  getClubs(){

    this.http = this.httpService;


    var response = this.http.get('/getPhysicalClubs')
      .map(res => res.json());
    return response;
      }
  }


