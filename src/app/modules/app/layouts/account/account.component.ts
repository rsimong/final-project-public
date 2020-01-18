import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showStoreModal: boolean;
  showSettingsModal: boolean;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.showStoreModal = false;
    this.showSettingsModal = false;
  }

  ngOnInit() {
  }

  toogleStoreModal() {
    this.showStoreModal = !this.showStoreModal;
  }

  toogleSettingsModal() {
    this.showSettingsModal = !this.showSettingsModal;
  }

  logout() {
    this.authenticationService.logout();
  }

}
