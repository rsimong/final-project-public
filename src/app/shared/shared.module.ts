import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplifyLogoComponent } from '@shared/components/simplify-logo/simplify-logo.component';


@NgModule({
  declarations: [
    SimplifyLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimplifyLogoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
