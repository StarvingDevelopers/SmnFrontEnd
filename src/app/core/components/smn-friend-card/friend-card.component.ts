import {Component, OnInit} from "@angular/core";
import {FriendsService} from "../../../features/services/friends.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'smn-friend-card',
  templateUrl: './friend-card.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class FriendCardComponent implements OnInit{
  friends: any[] = [];
  activeFriend: any = null;

  constructor(private friendService: FriendsService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("userData")!)
    this.friendService.getFriendsList(user.username).subscribe({
      next: (friends) => {
        this.friends = friends;
      },
      error: (err) => {
        this.friends = [
          {leftUsername: 'aaaaaa'}
        ]
        console.error(err);
      }
    });
  }

  showProfile(friend: any): void {
    this.activeFriend = friend;
  }

  hideProfile(): void {
    this.activeFriend = null;
  }
}
