import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule],
  templateUrl: '../pages/page-login/page-login.component.html',
  styleUrl: '../../sass/main.css'
})

export class LoginComponent {
  title = 'Login';
}
