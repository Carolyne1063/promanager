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

  
  landingImage= 'https://imgs.search.brave.com/UKrAVyjECaFTtV-5Iee9qNsPYGqS-McXD-2IkWMtNfk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzcyLzU0LzY4/LzM2MF9GXzQ3MjU0/Njg2N180TUJ3OWNW/RllFN0F3bnJJSWJt/Wjh4WFMwVjNtckl6/ci5qcGc'


}
