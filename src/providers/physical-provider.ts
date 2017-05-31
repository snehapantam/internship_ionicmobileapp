import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhysicaService {
  data: any;
  _favorites: string[] = [];

  constructor(private http: Http) {}

  getClubs(){
    return this.http.get('/getCampusResource')
      .subscribe(data => {
        console.log(data)
      });
  }

}
