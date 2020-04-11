import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    repeat_password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Simplify | Sign Up');
  }

  onSubmit() {
    if (!this.signupForm.valid) return;

    this.authenticationService.register(this.signupForm.value)
      .then(() => this.router.navigate(['/', 'app']))
      .catch((err) => console.log(err));
  }

}
