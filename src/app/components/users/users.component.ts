import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {IUser} from '../../interfaces';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: IUser[];
  currentUser: any;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    this.usersList = [];
  }

  ngOnInit(): void {
    this.userService.loadAllUsers().subscribe((users) => {
      this.usersList = users;
    });
    // @ts-ignore
    this.currentUser = this.authService.currentUser$.source.value;
  }

  handleBanClick(id: string): void {
    this.userService.ban(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.authService.onSuccess('Successfully banned a user');
      },
      error: err => {
        console.error(err);
      }
    });
  }

  handleUnbanClick(id: string): void {
    this.userService.unban(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.authService.onSuccess('Successfully unbanned a user');
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
