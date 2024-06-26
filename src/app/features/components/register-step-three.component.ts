import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormDataService} from "../services/register-form-data.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-register-step-three',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: '../pages/register/register-step-three.component.html',
})
export class RegisterStepThreeComponent {
  formData: any = {}
  @Output() next = new EventEmitter<void>;

  constructor(private formDataService: FormDataService) { }

  onSubmit() {
    if (!this.formData.userName || !this.formData.nickName || !this.formData.birthdate || !this.formData.gender) return

    this.formDataService.updateFormData(this.formData);

    this.formDataService.postFormData();
  }
}
