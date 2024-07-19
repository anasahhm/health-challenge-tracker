import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import this for reactive forms

import { AppComponent } from './app.component';
import { AppAddUserComponent } from './add-user/app-add-user.component';
import { AppUserListComponent } from './user-list/app-user-list.component'; // Import the user list component

@NgModule({
  declarations: [
    AppComponent,
    AppAddUserComponent,
    AppUserListComponent // Declare the user list component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Add this to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
