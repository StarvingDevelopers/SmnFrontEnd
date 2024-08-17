import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {SideNavComponent} from "./core/components/smn-side-nav/side-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, RouterLinkActive, SideNavComponent, NgIf],
  templateUrl: 'app.component.html',
  styleUrl: '../styles.css',
})

export class AppComponent implements OnInit{
  title = 'Smn';
  show = true

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.verifyRoute();
    });
  }

  verifyRoute() {
    const url = this.router.url;

    if (url.includes('/login') || url.includes('/register')) {
      this.show = false;
    }
  }
}
