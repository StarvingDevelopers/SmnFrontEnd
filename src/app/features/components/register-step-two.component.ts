import {Component, EventEmitter, Output} from '@angular/core';
import {FormDataService} from "../services/register-form-data.service";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-register-step-two',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: '../pages/register/register-step-two.component.html',
})
export class RegisterStepTwoComponent {
  formData: any = {};
  @Output() next = new EventEmitter<void>;

  constructor(private formDataService: FormDataService) { }

  onSubmit() {
    if (!this.formData.password || !this.formData.confirmPassword) return;

    if (this.formData.password !== this.formData.confirmPassword) return;

    this.formDataService.updateFormData(this.formData);
    this.next.emit();
  }
}
