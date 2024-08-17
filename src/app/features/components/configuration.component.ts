import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../core/components/smn-card/card.component";
import {OptionsComponent} from "../../core/components/smn-options/options.component";
import {FriendsService} from "../services/friends.service";
import {FriendCardComponent} from "../../core/components/smn-friend-card/friend-card.component";
import {SideNavComponent} from "../../core/components/smn-side-nav/side-nav.component";
import {UserProfileCardComponent} from "../../core/components/smn-user-profile-card/user-profile-card.component";

@Component({
  selector: 'configuration',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, CardComponent, OptionsComponent, FriendCardComponent, SideNavComponent, UserProfileCardComponent, NgIf],
  templateUrl: '../pages/configuration/configuration.component.html',
  styleUrl: '../../sass/main.css'
})

export class ConfigurationComponent{
  configurationForms = new FormGroup({})
  imageSrc: string | ArrayBuffer | null = null;


  onSubmit() { }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click(); // Trigger the file input click event
  }
}
