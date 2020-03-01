import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplifyLogoComponent } from '@shared/components/simplify-logo/simplify-logo.component';
import { SafePipe } from './pipes/safe.pipe';
import { AvatarImageComponent } from './components/avatar-image/avatar-image.component';
import { ErrorDevelopingComponent } from './components/error-developing/error-developing.component';


@NgModule({
  declarations: [
    SimplifyLogoComponent,
    SafePipe,
    AvatarImageComponent,
    ErrorDevelopingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimplifyLogoComponent,
    AvatarImageComponent,
    ErrorDevelopingComponent,
    SafePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
