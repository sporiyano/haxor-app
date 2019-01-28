// shared.module.ts
//  - shared module declaration, contains components that don’t import and inject services from
//  core or other features in their constructors
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// creating the module
@NgModule({
  imports: [
    // angular modules
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    // custom components
  ],
  exports: [
    // angular modules
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
