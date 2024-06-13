import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  subTitle1= 'You don’t have to see the whole staircase'
  subTitle2= 'Just take the first step'
  subTitle3= 'JOIN US TODAY! JOIN US TODAY! JOIN US TODAY!'

  
  landingImage= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqJc2s20MNE6ObulQKW_HFHn8PUFdjzriEA&s'

  landingImage1= 'https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png'

}
