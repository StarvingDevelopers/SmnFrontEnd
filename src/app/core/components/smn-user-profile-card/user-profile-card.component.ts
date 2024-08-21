import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FriendsService} from "../../../features/services/friends.service";

@Component({
  selector: 'smn-user-profile-card',
  templateUrl: './user-profile-card.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class UserProfileCardComponent {

  constructor(private friendService: FriendsService) {}

  @Input() id: number = -1;
  @Input() userName: string | undefined;
  @Input() nickName: string | undefined;
  @Input() description: string | undefined;
  @Input() profileImage: string = "";
  @Input() tag: string | undefined;
  @Input() isVisible: boolean = false;


  acceptFriendRequest(id: number) {
    this.friendService.acceptFriendRequest(id).subscribe({
      next: () => {

      },
      error: (err) => console.error(err)
    })
  }

  denyFriendRequest(id: number) {
    this.friendService.denyFriendRequest(id).subscribe({
      next: () => {

      },
      error: (err) => console.error(err)
    })
  }
}
