import {Component, Input, Renderer2, ElementRef} from '@angular/core';
import {FriendCardComponent} from "../smn-friend-card/friend-card.component";
import {NgOptimizedImage} from "@angular/common";
import {OptionsComponent} from "../smn-options/options.component";

@Component({
  selector: 'smn-side-nav',
  templateUrl: './side-nav.component.html',
  standalone: true,
  imports: [
    FriendCardComponent,
    NgOptimizedImage,
    OptionsComponent
  ],
  styleUrls: ['../../../sass/main.css']
})

export class SideNavComponent { }
