import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
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

  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  error = '';

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.titleService.setTitle('Simplify | Login');
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.checkIfExistLastUser();
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.user, this.loginForm.value.pass)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
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
