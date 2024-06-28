import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {OptionsComponent} from "../../core/components/smn-options/options.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-profile-configuration',
  standalone: true,
  imports: [
    NgOptimizedImage,
    OptionsComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: '../pages/profile-configurations/profile-configuration.component.html',
  styleUrl: '../../sass/main.css'
})
export class ProfileConfigurationComponent {
  imagePath: undefined;
  url: string | ArrayBuffer | null = './assets/images/fantasminha.png';
  currentData: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.currentData = localStorage.getItem('userData');

    this.currentData = JSON.parse(this.currentData);

    console.log(this.currentData);
  }

  updatedForm: FormGroup = this.formBuilder.group({
    nickName: [''],
    email: ['', [Validators.email]],
    password: ['', [Validators.required]],
    newPassword: ['', [Validators.minLength(6)]],
    gender: [''],
    profilePicture: [''],
    bio: ['']
  });

  onSubmit() {
    const userData = {
      username: this.currentData.username,
      password: this.updatedForm.get('password')?.value
    }

    this.dataService.postData(userData, '/auth/authenticate').subscribe({
      next: response => this.updateProfile(response),
      error: err => console.log(err)
    });
  }

  updateProfile(response: any) {
    const updatedData = {
      username: this.currentData.username,
      nickname: this.updatedForm.get('nickName')?.value,
      email: this.updatedForm.get('email')?.value,
      password: this.updatedForm.get('newPassword')?.value,
      gender: this.updatedForm.get('gender')?.value,
      profileImage: this.url,
      description: this.updatedForm.get('bio')?.value
    }

    this.dataService.postData(updatedData, '/profile/update').subscribe({
      next: response => this.handleResponse(response),
      error: err => console.log(err)
    });
  }

  handleResponse(response: any) {
    console.log(response);

    this.currentData.username = response.username;
    this.currentData.gender = response.gender;

    localStorage.setItem('userData', JSON.stringify(this.currentData));
  }

  pictureUploaded(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }


}
