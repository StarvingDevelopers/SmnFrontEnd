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

export class FriendCardComponent implements OnInit{
  friends: any[] = [];
  activeFriend: any = null;
  eita = false

  constructor(private friendService: FriendsService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("userData")!)
    this.friendService.getFriendsList(user.username).subscribe({
      next: (friends) => {
        this.friends = friends;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  showProfile(friend: any): void {
    this.activeFriend = friend;
    this.eita = true
    console.log('ta la')
  }

  hideProfile(): void {
    this.activeFriend = null;
    this.eita = false;
  }
}
