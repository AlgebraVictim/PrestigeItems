import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {first, map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuardGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      switchMap(user => user === undefined ? this.authService.authenticate() : [user]),
      map((user) => {
        // Remove the line below
        console.log(user);
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) {
          return;
        }
        this.router.navigate(['/login']);
      }),
      first()
    );
  }

}
