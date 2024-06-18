import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { NotificationsAdminComponent } from './notifications-admin/notifications-admin.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,
    SidebarComponent,
    HomeAdminComponent,
    ProjectsAdminComponent,
    UsersAdminComponent,
    NotificationsAdminComponent,
    LogoutAdminComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  selectedSection: string = 'home';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}

