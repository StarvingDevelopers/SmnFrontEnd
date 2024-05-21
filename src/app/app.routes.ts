import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./features/components/login.component";


export const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'login',  component: LoginComponent }
];
