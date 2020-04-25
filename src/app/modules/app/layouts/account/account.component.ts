import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { UserService } from '@shared/services/user.service';
import { ReplyUser } from '@models/replyUser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showStoreModal: boolean;
  showSettingsModal: boolean;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.showStoreModal = false;
    this.showSettingsModal = false;
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(
      (user: ReplyUser) => {
        this.authenticationService.setCurrentUser(user);
      }
    );
  }

  toogleStoreModal() {
    this.showStoreModal = !this.showStoreModal;
  }

  toogleSettingsModal() {
    this.showSettingsModal = !this.showSettingsModal;
  }

}
