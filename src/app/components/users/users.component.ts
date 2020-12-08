import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {IUser} from '../../interfaces';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: IUser[];
  currentUser: any;

  constructor(private userService: UserService, private authService: AuthService) {
    this.usersList = [];
  }

  ngOnInit(): void {
    this.userService.loadAllUsers().subscribe((users) => {
      this.usersList = users;
    });
    // @ts-ignore
    this.currentUser = this.authService.currentUser$.source.value;
  }

}
