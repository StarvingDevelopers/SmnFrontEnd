import {Component, Input} from '@angular/core';

@Component({
  selector: 'smn-user-profile-card',
  templateUrl: './user-profile-card.html',
  standalone: true,
  styleUrls: ['../../../sass/main.css']
})

export class UserProfileCardComponent {
  @Input() name: string | undefined;

}
