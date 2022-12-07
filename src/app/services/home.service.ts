import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PRODUCTS } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  public getDataFromAPI(): Observable<PRODUCTS> {
    return this.http.get<PRODUCTS>('./assets/json/MOCK_DATA.json');
  }
}
