import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required],
    confirmPass: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Simplify | Sign Up');
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    console.log(this.signupForm.value);
  }

}
