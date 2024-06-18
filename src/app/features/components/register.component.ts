import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'register',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive],
  templateUrl: '../pages/register/register.component.html',
  styleUrl: '../../sass/main.css'
})

export class RegisterComponent {}
