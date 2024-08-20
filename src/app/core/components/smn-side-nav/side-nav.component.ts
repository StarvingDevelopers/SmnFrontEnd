import {Component, Input, Renderer2, ElementRef} from '@angular/core';
import {FriendCardComponent} from "../smn-friend-card/friend-card.component";
import {NgOptimizedImage} from "@angular/common";
import {OptionsComponent} from "../smn-options/options.component";
import {UserProfileCardComponent} from "../smn-user-profile-card/user-profile-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'smn-side-nav',
  templateUrl: './side-nav.component.html',
  standalone: true,
    imports: [
        FriendCardComponent,
        NgOptimizedImage,
        OptionsComponent,
        UserProfileCardComponent
    ],
  styleUrls: ['../../../sass/main.css']
})

export class SideNavComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]).then(r => console.log(r));
  }
}
