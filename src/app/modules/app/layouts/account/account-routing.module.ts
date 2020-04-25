import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { MailComponent } from "./layouts/views/mail/mail.component";
import { ChatComponent } from './layouts/views/chat/chat.component';
import { ReplyComponent } from './layouts/reply/reply.component';

const routes: Routes = [
  {
    path: 'reply',
    component: ReplyComponent
  },
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 't',
        children: [
          {
            path: 'mail/:accountId',
            component: MailComponent
          },
          {
            path: 'chat/:accountId',
            component: ChatComponent
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
