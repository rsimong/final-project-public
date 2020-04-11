import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Import Routes */
import { AccountRoutingModule } from './account-routing.module';

/* Import Shared Module */
import { SharedModule } from '@shared/shared.module';

/* Import Services */
import { UserService } from '@shared/services/user.service';

/* Import Components */
import { AccountComponent } from './account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalConnectAccountComponent } from './components/modal-connect-account/modal-connect-account.component';
import { ModalApplicationSettingsComponent } from './components/modal-application-settings/modal-application-settings.component';
import { SearcherComponent } from './components/searcher/searcher.component';

/* Layouts */
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MailComponent } from './layouts/views/mail/mail.component';
import { ChatComponent } from './layouts/views/chat/chat.component';

@NgModule({
  declarations: [
    AccountComponent,
    SidebarComponent,
    DashboardComponent,
    ModalConnectAccountComponent,
    ModalApplicationSettingsComponent,
    SearcherComponent,
    MailComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class AccountModule { }
