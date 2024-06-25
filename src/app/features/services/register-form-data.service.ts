import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {

  }

  updateFormData(data: any) {
    const currentData = this.formData.value;
    this.formData.next({ ...currentData, ...data });
  }

  postFormData() {

    this.http.post<FormData>('https://backend.starvingdevelopers.tech/account/create', { username: this.formData.value.userName, nickname: this.formData.value.nickName, email: this.formData.value.email, password: this.formData.value.password, gender: this.formData.value.gender, birthdate: this.formData.value.birthdate }));
  }
}
