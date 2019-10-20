import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  rootUrl = 'http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=';
  constructor(private httpClient: HttpClient) {}

  loadDetails(searchText?:any){
    let query = (searchText) ? searchText : '*';
    return this.httpClient.get(`${this.rootUrl}${query}`);
  };
}
