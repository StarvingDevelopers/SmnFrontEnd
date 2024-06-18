import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule, RouterLinkActive],
  templateUrl: '../pages/login/login.component.html',
  styleUrl: '../../sass/main.css'
})

export class LoginComponent{

  authorizedLogin = false

  login: FormGroup = new FormGroup({
    userName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  getLoginStatus(){
    this.authorizedLogin = !!localStorage.getItem("login")
  }

  getLogindescription = () => this.authorizedLogin ? "authorized" : "unauthorized"

  onSubmit(){
    console.log(this.login.value)

    //Make post
    // posting...

    if(this.authorizedLogin){
      localStorage.clear()
    } else {
      localStorage.setItem("login", "yes")
    }

    this.getLoginStatus()
  }
}
