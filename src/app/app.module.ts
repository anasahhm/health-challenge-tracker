// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
// Other imports

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    // Other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
