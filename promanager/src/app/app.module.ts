import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routes } from './app.routes'; // Adjust path if necessary
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { HomeAdminComponent } from './components/admin-dashboard/home-admin/home-admin.component';
import { ProjectsAdminComponent } from './components/admin-dashboard/projects-admin/projects-admin.component';
import { UsersAdminComponent } from './components/admin-dashboard/users-admin/users-admin.component';
import { NotificationsAdminComponent } from './components/admin-dashboard/notifications-admin/notifications-admin.component';
import { LogoutAdminComponent } from './components/admin-dashboard/logout-admin/logout-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    NavbarComponent,
    HomeAdminComponent,
    ProjectsAdminComponent,
    UsersAdminComponent,
    NotificationsAdminComponent,
    LogoutAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, // Include FormsModule here
    routes,// Include AppRoutingModule or app.routes here
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }