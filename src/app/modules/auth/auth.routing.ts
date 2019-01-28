// Auth.routing.ts
//  - Auth module routing declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom modules
import { LoginPage } from '@app/modules/auth/login/login.page';
import { SignupPage } from '@app/modules/auth/signup/signup.page';

// creating the routes
const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

// creating the module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRouting {}
