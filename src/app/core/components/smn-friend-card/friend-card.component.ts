import {Component, OnInit} from "@angular/core";
import {FriendsService} from "../../../features/services/friends.service";

@Component({
  selector: 'smn-friend-card',
  templateUrl: './friend-card.component.html',
  standalone: true,
  styleUrls: ['../../../sass/main.css']
})

export class FriendCardComponent implements OnInit{
  friends: any[] = [];

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
}
