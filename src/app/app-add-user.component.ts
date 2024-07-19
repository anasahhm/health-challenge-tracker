import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './app-add-user.component.html',
  styleUrls: ['./app-add-user.component.css']
})
export class AppAddUserComponent {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      workout: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User added:', this.addUserForm.value);
      // Logic to handle adding the user (e.g., send the data to a service)
      this.addUserForm.reset();
    }
  }
}
