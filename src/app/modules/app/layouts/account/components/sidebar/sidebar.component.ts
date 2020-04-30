import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Import Services
import { AuthenticationService } from '@core/authentication/authentication.service';

// Import Models
import { ReplyUser } from '@models/replyUser';
import { Account } from '@models/account';

// Import fakeData
import UserFake from '@fakedb/user.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() changeStateStoreModal = new EventEmitter<Boolean>();
  @Output() changeStateSettingsModal = new EventEmitter<Boolean>();

  user: ReplyUser;

  expandMenu = false;

  mainMenu = [];

  routesByAccountType = {
    'facebook': '',
    'outlook': 'mail/:idAccount',
    'slack': 'chat/:idAccount'
  };

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.getCurrentUserValue().subscribe((value: ReplyUser) => this.user = value);
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
    if (!UserFake) return;
    UserFake.accounts.forEach((account: any) => {
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

  logout() {
    this.authenticationService.logout();
  }

}
