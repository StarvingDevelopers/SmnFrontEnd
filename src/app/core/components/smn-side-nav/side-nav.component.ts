import {Component} from '@angular/core';
import {FriendCardComponent} from "../smn-friend-card/friend-card.component";
import {NgOptimizedImage} from "@angular/common";
import {OptionsComponent} from "../smn-options/options.component";
import {UserProfileCardComponent} from "../smn-user-profile-card/user-profile-card.component";
import {Router} from "@angular/router";
import {GroupModalComponent} from "../smn-group-modal/group-modal.component";
import {GroupModalVisibilityService} from "../../services/group-modal-visibility.service";

@Component({
  selector: 'smn-side-nav',
  templateUrl: './side-nav.component.html',
  standalone: true,
  imports: [
    FriendCardComponent,
    NgOptimizedImage,
    OptionsComponent,
    UserProfileCardComponent,
    GroupModalComponent
  ],
  styleUrls: ['../../../sass/main.css']
})

export class SideNavComponent {
  userProfile = JSON.parse(localStorage.getItem("userProfile")!)
  isCreateGroupVisible: boolean = false;

  constructor(private visibilityService: GroupModalVisibilityService, private router: Router) {}

  newGroupBtn() {
    this.isCreateGroupVisible = !this.isCreateGroupVisible

    this.visibilityService.setValue(this.isCreateGroupVisible)
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(r => console.log(r));
  }
}
