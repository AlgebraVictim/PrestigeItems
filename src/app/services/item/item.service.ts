import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  createItem(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `items/create`, data, {withCredentials: true});
  }

  editItem(data: any, id: string): Observable<any> {
    return this.http.put(environment.baseUrl + `items/edit/${id}`, data, {withCredentials: true});
  }

  loadItem(id: string): Observable<any> {
    return this.http.get(environment.baseUrl + `items/item/${id}`);
  }

  loadItems(): Observable<any> {
    return this.http.get(environment.baseUrl + `items/`);
  }

  removeItem(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + `items/remove/${id}`, {withCredentials: true});
  }

  star(id: string): Observable<any> {
    return this.http.put(environment.baseUrl + `items/star/${id}`, {}, {withCredentials: true});
  }
}
