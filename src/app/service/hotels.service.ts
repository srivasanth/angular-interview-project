
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class HotelsService {
  result;

  constructor(private http: Http) { }
 
  getHotels() {
  return  this.http.get('../../assets/hotels.json')
      .map( res => res.json())
  }
  
}
