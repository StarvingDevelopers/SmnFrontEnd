import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterStepOneComponent} from "./register-step-one.component";
import {RegisterStepTwoComponent} from "./register-step-two.component";
import {RegisterStepThreeComponent} from "./register-step-three.component";
import {FormDataService} from "../services/register-form-data.service";

@Component({
  selector: 'register',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, RegisterStepOneComponent, RegisterStepTwoComponent, RegisterStepThreeComponent, NgIf],
  templateUrl: '../pages/register/register.component.html',
  styleUrl: '../../sass/main.css'
})

export class RegisterComponent {
  currentStep = 1;
  totalSteps = 3;

  constructor(private formDataService: FormDataService) {

  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

}
