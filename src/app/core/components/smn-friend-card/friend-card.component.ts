import {Component, OnInit} from "@angular/core";
import {FriendsService} from "../../../features/services/friends.service";
import {NgForOf, NgIf} from "@angular/common";
import {UserProfileCardComponent} from "../smn-user-profile-card/user-profile-card.component";

@Component({
  selector: 'smn-friend-card',
  templateUrl: './friend-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    UserProfileCardComponent,
    NgIf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class FriendCardComponent implements OnInit {
  friends: any[] = [];
  visibility: boolean[] = []

  constructor(private friendService: FriendsService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("userAccount")!)
    this.friendService.getFriendsList(user.username).subscribe({
      next: (friends) => {
        this.friends = friends;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.visibility = new Array(this.friends.length).fill(false);
  }

  showProfile(index: number): void {
    this.visibility.forEach((isVisible, i) => {
      if (isVisible && i !== index) {
        this.visibility[i] = false;
      }
    });

    this.visibility[index] = !this.visibility[index];
  }
}
