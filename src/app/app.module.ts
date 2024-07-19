import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UserService } from './services/user.service';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    PaginationComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
