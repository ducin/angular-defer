import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonStandaloneComponent } from './non-standalone';

@NgModule({
  declarations: [
    NonStandaloneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NonStandaloneComponent
  ]
})
export class LegacyModule { }
