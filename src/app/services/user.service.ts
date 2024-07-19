import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'userData';

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    const initialData = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      }
    ];
    localStorage.setItem(this.storageKey, JSON.stringify(initialData));
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addUser(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
