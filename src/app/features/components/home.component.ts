import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../core/components/smn-card/card.component";
import {OptionsComponent} from "../../core/components/smn-options/options.component";
import {FriendsService} from "../services/friends.service";
import {FriendCardComponent} from "../../core/components/smn-friend-card/friend-card.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, CardComponent, OptionsComponent, FriendCardComponent],
  templateUrl: '../pages/home/home.component.html',
  styleUrl: '../../sass/main.css'
})

export class HomeComponent {
  userData = JSON.parse(localStorage.getItem("userData")!)


  colors = ["Red", "Blue", "White"];
}
