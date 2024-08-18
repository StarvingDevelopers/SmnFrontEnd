import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

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
  @Input() userName: string | undefined;
  @Input() nickName: string | undefined;
  @Input() description: string | undefined;
  @Input() profileImage: string = "";
  @Input() isVisible: boolean = false;
}
