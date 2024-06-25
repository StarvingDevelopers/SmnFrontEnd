import {Component, EventEmitter, Output, output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormDataService} from "../services/register-form-data.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-register-step-one',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: '../pages/register/register-step-one.component.html',
})
export class RegisterStepOneComponent {
  formData: any = {};
  @Output() next = new EventEmitter<void>;

  constructor(private formDataService: FormDataService) { }

  onSubmit() {
    if (!this.formData.email) return

    this.formDataService.updateFormData(this.formData);
    this.next.emit();
  }
}
