import {Component, OnInit} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../core/components/smn-card/card.component";
import {OptionsComponent} from "../../core/components/smn-options/options.component";
import {FriendCardComponent} from "../../core/components/smn-friend-card/friend-card.component";
import {SideNavComponent} from "../../core/components/smn-side-nav/side-nav.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, CardComponent, OptionsComponent, FriendCardComponent, SideNavComponent],
  templateUrl: '../pages/home/home.component.html',
  styleUrl: '../../sass/main.css'
})

export class HomeComponent implements OnInit{
  userData = JSON.parse(localStorage.getItem("userData")!)
  greeting = ""

  colors = ["#C74D5C", "#7F7EDF", "#ECD06B"];

  ngOnInit() {
    this.changeGreeting();
  }

  changeGreeting() {
    const now = new Date();

    if (now.getHours() >= 6 && now.getHours() <= 12) {
      this.greeting = "Bom dia"
    } else if (now.getHours() >= 12 && now.getHours() <= 18) {
      this.greeting = "Boa tarde"
    } else {
      this.greeting = "Boa noite"
    }
  }
}
