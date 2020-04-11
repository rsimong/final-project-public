import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lastUser = {
    user: '',
    avatar: '',
    detected: false
  };

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  loading = false;
  returnUrl: string;
  error = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Simplify | Login');
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/app';
    this.checkIfExistLastUser();
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    this.loading = true;
    this.authenticationService.login({ ...this.loginForm.value })
      .then(() => this.router.navigate([this.returnUrl]))
      .catch((err) => console.log(err))
      .finally(() => this.loading = false);
  }

  checkIfExistLastUser() {
    const lastUser = localStorage.getItem('lastUser');
    if (lastUser) {
      const lastUserValues = JSON.parse(lastUser);
      const lastUsername = lastUserValues.username;
      const lastUserName = `${lastUserValues.name} ${lastUserValues.surname}`;
      const lastUserAvatar = lastUserValues.avatar;
      this.loginForm.setValue({ user: lastUsername, pass: '' });
      this.lastUser = { user: lastUserName, avatar: lastUserAvatar, detected: true };
      return true;
    }
    return false;
  }

  allowEditUserField() {
    this.lastUser.detected = false;
  }

}
