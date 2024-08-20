import {Component, OnInit} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import {UserProfileCardComponent} from "../smn-user-profile-card/user-profile-card.component";
import {DataService} from "../../../features/services/data.service";
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'smn-friend-request-list',
  templateUrl: './friend-request-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    UserProfileCardComponent,
    NgIf
  ],
  styleUrls: ['../../../sass/main.css']
})

export class FriendRequestListComponent implements OnInit {
  private userAccount = JSON.parse(localStorage.getItem("userAccount")!)
  protected friendRequestList: any[] = []
  friendRequestProfile: any[] = []
  visibility: boolean[] = []

  constructor(private friendsService: FriendsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.friendsService.getFriendRequestList(this.userAccount.username).subscribe({
      next: (friends) => {
        this.friendRequestList = friends;

        for (const friend of this.friendRequestList) {
          this.dataService.getData("/profile/" + friend.sender).subscribe({
            next: (friend) => {
              this.friendRequestProfile.push(friend)
            },
            error: (err) => {
              console.error(err);
            }
          })
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
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
