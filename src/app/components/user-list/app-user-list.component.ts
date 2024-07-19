import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent {
  users: Array<{ name: string, email: string, workout: string }> = [];

  // This function should be updated to fetch and display real data
  getUsers() {
    // Sample data
    this.users = [
      { name: 'John Doe', email: 'john.doe@example.com', workout: 'Running' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', workout: 'Cycling' }
    ];
  }

  ngOnInit() {
    this.getUsers();
  }
}
