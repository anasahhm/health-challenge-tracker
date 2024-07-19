import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppAddUserComponent } from './add-user/app-add-user.component';
import { AppUserListComponent } from './user-list/app-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAddUserComponent,
    AppUserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
