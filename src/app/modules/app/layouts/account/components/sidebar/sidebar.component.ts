import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { User } from '@app/shared/models/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: User;

  expandMenu = false;

  accountsList = [
    {
      type: 'gmail',
      avatar: 'https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg',
      user: 'Julia Martínez',
      username: 'jmartinez@gmail.com',
      quickAccess: true,
      news: true
    },
    {
      type: 'outlook',
      avatar: '',
      user: 'Julia M',
      username: 'jmartinez@outlook.com',
      quickAccess: false,
      news: false
    },
    {
      type: 'slack',
      avatar: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_1280.jpg',
      user: 'Jmartinez',
      username: 'jmartinez@gmail.com',
      quickAccess: true,
      news: false
    },
    {
      type: 'twitter',
      avatar: '',
      user: 'Julia M',
      username: 'jmartinez@outlook.com',
      quickAccess: false,
      news: false
    },
    {
      type: 'facebook',
      avatar: '',
      user: 'Julia M',
      username: 'jmartinez@outlook.com',
      quickAccess: false,
      news: false
    }
  ];

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }

  toggleExpandMenu() {
    // this.expandMenu = !this.expandMenu;
  }

  capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

}
