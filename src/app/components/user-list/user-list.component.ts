import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm = '';
  filterType = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  get filteredUsers() {
    return this.users.filter(user =>
      (this.searchTerm ? user.name.includes(this.searchTerm) : true) &&
      (this.filterType ? user.workouts.some(workout => workout.type === this.filterType) : true)
    );
  }
}
