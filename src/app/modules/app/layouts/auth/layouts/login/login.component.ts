import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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

  loginForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Simplify | Login');
    this.checkIfExistLastUser();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  checkIfExistLastUser() {
    const lastUser = localStorage.getItem('last_user');
    if (lastUser) {
      const lastUserValues = JSON.parse(lastUser);
      const lastUserName = lastUserValues.user;
      const lastUserAvatar = lastUserValues.avatar;
      this.loginForm.setValue({ user: lastUserName, pass: '' });
      this.lastUser = { user: lastUserName, avatar: lastUserAvatar, detected: true };
      return true;
    }
    return false;
  }

  allowEditUserField() {
    this.lastUser.detected = false;
  }

}
