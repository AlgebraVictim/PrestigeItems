import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: IUser[];

  constructor(private userService: UserService) {
    this.usersList = [];
  }

  ngOnInit(): void {
    this.userService.loadAllUsers().subscribe((users) => {
      this.usersList = users;
    });
  }

}
