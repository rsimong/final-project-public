import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from "moment";
import * as mails from "@fakedb/outlookMessages.json";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  searcherForm: FormGroup;
  mailForm: FormGroup;

  foldersList = [
    [
      { icon: 'inbox', text: 'Inbox', counter: 43 },
      { icon: 'drafts', text: 'Drafts', counter: 7 },
      { icon: 'send', text: 'Sent', counter: 1 },
      { icon: 'star_border', text: 'Favorites', counter: 0 }
    ],
    [
      { icon: 'block', text: 'Spam', counter: 9999999999999 },
      { icon: 'delete', text: 'Trash', counter: 0 },
      { icon: 'keyboard_arrow_down', text: 'More', counter: 0 }
    ]
  ];

  messageOpened: number[] = [0, 0];
  messagesGroups = [
    [...mails.response]
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.searcherForm = this.fb.group({
      searcher: ['']
    });

    this.mailForm = this.fb.group({
      senders: [''],
      body: ''
    });
  }

  getCounterNumber(num) {
    const maxNum = 100;
    if (num >= maxNum) {
      num = `${maxNum - 1}+`;
    }
    return num;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.searcherForm.invalid) {
      return;
    }
    console.log(this.searcherForm.value);
  }

  getPreviewTextMessage(txt: string) {
    const maxTextLength = 78;
    if (txt.length > maxTextLength) {
      return `${txt.substring(0, maxTextLength)}...`;
    }
    return txt;
  }

  readMessage(iGroup: number, iMessage: number) {
    this.messageOpened = [iGroup, iMessage];
  }

  getDateWithFormatMailList(date: string): string {
    if (moment(date, [moment.ISO_8601]).diff(moment(), 'days') >= -2) {
      return moment(date, [moment.ISO_8601]).format("H:mm");
    } else {
      return moment(date, [moment.ISO_8601]).format("D MMM");
    }
  }

  getDateWithFormatMailContent(date: string): string {
    if (moment(date, [moment.ISO_8601]).diff(moment(), 'days') >= -2) {
      if (moment(date, [moment.ISO_8601]).diff(moment(), 'days') === 0) {
        return moment(date, [moment.ISO_8601]).format("[Today], h:mmA");
      } else if (moment(date, [moment.ISO_8601]).diff(moment(), 'days') === -1) {
        return moment(date, [moment.ISO_8601]).format("[Yesterday], h:mmA");
      }
    } else {
      return moment(date, [moment.ISO_8601]).format("dddd, MMM D, YYYY h:mmA");
    }
  }

  sendReply() {
    console.log(this.mailForm);
  }

}
