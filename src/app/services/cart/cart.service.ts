import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) {
  }

  createCartItem(id: string): Observable<any> {
    return this.http.post(environment.baseUrl + `cart/create/${id}`, {}, {withCredentials: true});
  }

  loadCart(): Observable<any> {
    return this.http.get(environment.baseUrl + `cart/`, {withCredentials: true});
  }

  removeCartItem(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + `cart/delete/${id}`, {withCredentials: true});
  }

  checkout(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `cart/checkout/`, data, {withCredentials: true});
  }
}
