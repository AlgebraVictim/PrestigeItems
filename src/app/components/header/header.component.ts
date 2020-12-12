import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged$: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLogged$ = authService.currentUser$;
  }

  ngOnInit(): void {
    console.log(this.isLogged$);
  }

  logoutHandler(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.authService.onSuccess('Logged out successfully!');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
