import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'smn-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: 'app.component.html',
  styleUrl: '../styles.css',
})

export class AppComponent {
  title = 'Smn';
}
