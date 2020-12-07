import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../../interfaces';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {

  private currentUser: BehaviorSubject<any> = new BehaviorSubject(undefined);
  currentUser$ = this.currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private http: HttpClient) {
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `users/register`, data, {withCredentials: true}).pipe(
      tap((user: any) => this.currentUser.next(user))
    );
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `users/login`, data, {withCredentials: true}).pipe(
      tap((user: any) => this.currentUser.next(user))
    );
  }

  logout(): Observable<any> {
    // with credentials allow us access the cookies and etc.
    return this.http.post(environment.baseUrl + `users/logout`, {}, {withCredentials: true}).pipe(
      tap((user: any) => this.currentUser.next(null))
    );
  }

  authenticate(): Observable<any> {
    console.log('im inside');
    return this.http.get(environment.baseUrl + `users/profile`, {withCredentials: true}).pipe(
      tap((user: any) => {
        this.currentUser.next(user);
      }),
      catchError(() => {
        console.log('You are not logged in!');
        this.currentUser.next(null);
        return [null];
      })
    );
  }
}
