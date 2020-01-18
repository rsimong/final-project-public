import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplifyLogoComponent } from '@shared/components/simplify-logo/simplify-logo.component';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    SimplifyLogoComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimplifyLogoComponent,
    SafePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
