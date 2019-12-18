import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Import Routes */
import { AccountRoutingModule } from './account-routing.module';

/* Import Shared Module */
import { SharedModule } from '@shared/shared.module';

/* Import Components */
import { AccountComponent } from './account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PreviewAccountProfileComponent } from './components/preview-account-profile/preview-account-profile.component';

@NgModule({
  declarations: [
    AccountComponent,
    SidebarComponent,
    PreviewAccountProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
