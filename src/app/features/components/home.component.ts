import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../core/components/smn-card/card.component";
import {OptionsComponent} from "../../core/components/smn-options/options.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, CardComponent, OptionsComponent],
  templateUrl: '../pages/home/home.component.html',
  styleUrl: '../../sass/main.css'
})

export class HomeComponent {

  colors = ["Red", "Blue", "White"];

}
