import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { ReplyUser } from '@app/shared/models/replyUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: ReplyUser;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = null;
  }

}
