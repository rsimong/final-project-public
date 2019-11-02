import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

/* Import Layouts */
import { LoginComponent } from './layouts/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
