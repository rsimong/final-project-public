import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

/* Import Shared Component */
import { SimplifyLogoComponent } from '@shared/components/simplify-logo/simplify-logo.component';

/* Import Layouts */
import { AuthComponent } from './auth.component';
import { LoginComponent } from '@app/modules/app/layouts/auth/layouts/login/login.component';
import { SignupComponent } from './layouts/signup/signup.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SimplifyLogoComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
