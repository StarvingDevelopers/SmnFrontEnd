import {Routes} from '@angular/router';
import {LoginComponent} from "./features/components/login.component";
import {RegisterComponent} from "./features/components/register.component";
import {HomeComponent} from "./features/components/home.component";
import {AuthGuardProviders} from "./core/guard/auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardProviders] },
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];
