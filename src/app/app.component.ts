import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simplify';

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.authenticationService.logout();
    }
  }
}
