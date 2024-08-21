import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DataService} from "./data.service";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData = new BehaviorSubject<any>({});

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {}

  updateFormData(data: any) {
    const currentData = this.formData.value;
    this.formData.next({ ...currentData, ...data });
  }

  postFormData() {

    const data = {
      username: this.formData.value.userName,
      nickname: this.formData.value.nickName,
      email: this.formData.value.email,
      password: this.formData.value.password,
      gender: this.formData.value.gender,
      birthdate: this.formData.value.birthdate
    }

    this.dataService.postData(data,'account/create').subscribe({
      next: response => this.handleResponse(response),
      error: err => console.log(err)
    });
  }

  handleResponse(response: any) {
    this.authService.login();
    localStorage.setItem('userAccount', JSON.stringify(response));

    this.router.navigate(['/']);
  }
}
