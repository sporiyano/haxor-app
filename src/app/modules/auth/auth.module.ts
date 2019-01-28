// Auth/Auth.module.ts
//  - Auth module declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { NgModule } from '@angular/core';

// ionic modules
import { IonicModule } from '@ionic/angular';

// importing pages
import { LoginPage } from '@app/modules/auth/login/login.page';
import { SignupPage } from '@app/modules/auth/signup/signup.page';

// importing custom modules
import { AuthRouting } from '@app/modules/auth/auth.routing';

// creating the angular module
@NgModule({
  declarations: [LoginPage, SignupPage],
  imports: [IonicModule, AuthRouting]
})
export class AuthModule {}
