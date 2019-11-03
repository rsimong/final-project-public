import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

/* Import Shared Module */
import { SharedModule } from '@shared/shared.module';

/* Import Layouts */
import { AuthComponent } from './auth.component';
import { LoginComponent } from '@app/modules/app/layouts/auth/layouts/login/login.component';
import { SignupComponent } from './layouts/signup/signup.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class AuthModule { }
