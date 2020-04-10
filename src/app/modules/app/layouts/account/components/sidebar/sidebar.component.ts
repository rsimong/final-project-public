import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { User } from '@models/user';
import { Account } from '@models/account';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() changeStateStoreModal = new EventEmitter<Boolean>();
  @Output() changeStateSettingsModal = new EventEmitter<Boolean>();

  user: User;

  expandMenu = false;

  mainMenu = [];

  routesByAccountType = {
    'facebook': '',
    'gmail': 'mail/:idAccount',
    'slack': 'chat/:idAccount'
  };

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.setMainMenu();
  }

  toggleExpandMenu() {
    this.expandMenu = !this.expandMenu;
  }

  capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  setMainMenu() {
    const sections = [];
    const mainMenuTemp = {};
    const mainMenuDefinitive = [];
    this.user.accounts.forEach((account: Account) => {
      const isNew = sections.find((section) => section === account.type);
      if (!isNew) {
        sections.push(account.type);
        mainMenuTemp[account.type] = [account];
      } else {
        mainMenuTemp[account.type].push(account);
      }
    });

    sections.forEach((section) => {
      mainMenuDefinitive.push({
        name: section,
        options: mainMenuTemp[section].sort((a, b) => (a.user > b.user) ? 1 : ((b.user > a.user) ? -1 : 0))
      });
    });

    mainMenuDefinitive.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.mainMenu = [...mainMenuDefinitive];
  }

  setAccountUrl(type, id) {
    if (!this.checkTemplateRoute(type)) {
      return;
    }
    const route = 't/' + this.routesByAccountType[type].replace(':idAccount', id);
    return [route];
  }

  checkTemplateRoute(type) {
    const route = this.routesByAccountType[type];
    if (route && route != '') {
      // console.log(route);
      return true;
    } else {
      // console.log('Route not defined!');
      return false;
    }
  }

  openStoreModal() {
    this.changeStateStoreModal.emit(true);
  }

  openSettingsModal() {
    this.changeStateSettingsModal.emit(true);
  }

}
