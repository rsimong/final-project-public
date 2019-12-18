import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-account-profile',
  templateUrl: './preview-account-profile.component.html',
  styleUrls: ['./preview-account-profile.component.css']
})
export class PreviewAccountProfileComponent implements OnInit {

  @Input() account: {
    type: 'gmail' | 'slack' | 'twitter' | 'facebook',
    avatar: string,
    user: string,
    username: string,
    news: boolean
  };

  constructor() { }

  ngOnInit() {
  }

}
