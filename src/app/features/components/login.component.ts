import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DataService} from "../services/data.service";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive, NgIf],
  templateUrl: '../pages/login/login.component.html',
  styleUrl: '../../sass/main.css'
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  authenticated = false;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  onSubmit() {

    const data = {
      username:this.loginForm.get('username')?.value,
      password:this.loginForm.get('password')?.value
    }

    this.dataService.postData(data, '/auth/authenticate').subscribe({
        next: response => this.handleResponse(response),
        error: err => console.log(err)
      }
    )
  }

  handleResponse(response: any) {
    this.authService.login();
    localStorage.setItem('userData', JSON.stringify(response));
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
