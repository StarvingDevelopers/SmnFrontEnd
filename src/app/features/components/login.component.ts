import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: '../pages/page-login/page-login.component.html',
  styleUrl: '../../sass/main.css'
})

export class LoginComponent {
  title = 'Login';
}
