import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  loadAllUsers(): Observable<any> {
    return this.http.get(environment.baseUrl + `users`);
  }

  addFunds(coins: number): Observable<any> {
    return this.http.put(environment.baseUrl + `users/addFunds`, {coins}, {withCredentials: true});
  }

  ban(id: string): Observable<any> {
    return this.http.put(environment.baseUrl + `users/ban/${id}`, {}, {withCredentials: true});
  }

  unban(id: string): Observable<any> {
    return this.http.put(environment.baseUrl + `users/unban/${id}`, {}, {withCredentials: true});
  }
}
