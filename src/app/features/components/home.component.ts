﻿import {Component, OnInit} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../core/components/smn-card/card.component";
import {OptionsComponent} from "../../core/components/smn-options/options.component";
import {FriendCardComponent} from "../../core/components/smn-friend-card/friend-card.component";
import {SideNavComponent} from "../../core/components/smn-side-nav/side-nav.component";
import {DataService} from "../services/data.service";
import {FriendRequestListComponent} from "../../core/components/smn-friend-list/friend-request-list.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, CardComponent, OptionsComponent, FriendCardComponent, SideNavComponent, FriendRequestListComponent, NgIf],
  templateUrl: '../pages/home/home.component.html',
  styleUrl: '../../sass/main.css'
})

export class HomeComponent implements OnInit{
  constructor(private dataService: DataService) { }

  userAccount = JSON.parse(localStorage.getItem("userAccount")!)
  userProfile = JSON.parse(localStorage.getItem("userProfile")!)
  groups: any[] = []
  greeting = ""
  friendRequestListVisibility: boolean = false

  ngOnInit() {
    this.getUserProfile()
    this.getGroups()
    this.changeGreeting()
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

  getUserProfile() {
    this.dataService.getData('/profile/' + this.userAccount.username).subscribe({
        next: response => this.handleResponse(response),
        error: err => console.log(err)
      }
    )
  }

  handleResponse(response: any) {
    localStorage.setItem('userProfile', JSON.stringify(response));
  }

  openFriendRequestList() {
    this.friendRequestListVisibility = !this.friendRequestListVisibility
  }

  getGroups() {
    this.dataService.getData('/group/id/2').subscribe({
      next: response => {
        this.groups.push(response)
      },
      error: err => console.log(err)
    })
  }
}
