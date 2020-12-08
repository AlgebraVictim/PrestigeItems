import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PurchasesService {

  constructor(private http: HttpClient) {
  }

  loadPurchases(): Observable<any> {
    return this.http.get(environment.baseUrl + `orders/`, {withCredentials: true});
  }
}
