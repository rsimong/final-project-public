import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    // redirect to home if already logged in
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['/app']);
    }
  }

  ngOnInit() {
  }

}
