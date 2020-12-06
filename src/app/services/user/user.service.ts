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
}
