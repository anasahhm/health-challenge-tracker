import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  name = '';
  workoutType = '';
  workoutMinutes = 0;

  constructor(private userService: UserService) {}

  addUser() {
    if (this.name && this.workoutType && this.workoutMinutes) {
      const user = {
        id: Date.now(),
        name: this.name,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
      };
      this.userService.addUser(user);
      this.name = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    }
  }
}
