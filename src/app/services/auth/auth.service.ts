import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {IUser} from '../../interfaces';
import {HttpClient} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {element} from 'protractor';

@Injectable()
export class AuthService {

  private currentUser: BehaviorSubject<any> = new BehaviorSubject(undefined);
  currentUser$ = this.currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private http: HttpClient) {
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `users/register`, data, {withCredentials: true}).pipe(
      retry(1),
      catchError(this.handleError),
      tap((user: any) => this.currentUser.next(null))
    );
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + `users/login`, data, {withCredentials: true}).pipe(
      retry(1),
      catchError(this.handleError),
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

  handleError(error: any): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.msg}`;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.error.msg}`;
    }
    // tslint:disable-next-line:no-shadowed-variable
    const element = document.getElementById('error');
    // @ts-ignore
    element.innerText = error.error.msg;
    // @ts-ignore
    element.style.display = 'inline';
    // @ts-ignore
    setTimeout(() => element.style.display = 'none', 4000);
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  onSuccess(msg: any): void {
    const elementS = document.getElementById('success');
    // @ts-ignore
    elementS.innerText = msg;
    // @ts-ignore
    elementS.style.display = 'inline';
    // @ts-ignore
    setTimeout(() => elementS.style.display = 'none', 4000);
  }
}
