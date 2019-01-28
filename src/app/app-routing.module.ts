// app-routing.module.ts
// main app routing declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: '@app/modules/auth/auth.module#AuthModule' }
];

// creating the angular module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
