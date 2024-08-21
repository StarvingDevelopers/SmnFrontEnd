import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {SideNavComponent} from "./core/components/smn-side-nav/side-nav.component";
import {ToastComponent} from "./core/components/smn-toast/toast.component";
import {filter} from "rxjs";
import {GroupModalComponent} from "./core/components/smn-group-modal/group-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, RouterLinkActive, SideNavComponent, NgIf, ToastComponent, GroupModalComponent],
  templateUrl: 'app.component.html',
  styleUrl: '../styles.css',
})

export class AppComponent implements OnInit{
  title = 'Smn';
  show = true

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.verifyRoute();
      });
  }

  verifyRoute() {
    const url = this.router.url;
    this.show = !(url.includes('/login') || url.includes('/register'));
  }
}
