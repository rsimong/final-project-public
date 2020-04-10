import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import moment from "moment";

import { channel } from "@fakedb/chat.json";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channelOpened = {};
  messageHistory = [];

  filterChannelGroups: FormGroup;
  groupChannelsSearcherActive: boolean = false;
  privateChannelsSearcherActive: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterChannelGroups = this.fb.group({
      privateChannels: '',
      groupChannels: ''
    });
    this.channelOpened = { ...channel.info.response.channel };
    this.messageHistory = this.optimizeMessageHistory([...channel.history.response.messages]);
  }

  setGroupChannelsSearcherActive(value: boolean) {
    if (!value && this.filterChannelGroups.controls.groupChannels.value.trim().length != 0) {
      return;
    }
    this.filterChannelGroups.patchValue({ 'groupChannels': '' });
    this.groupChannelsSearcherActive = value;
  }

  setPrivateChannelsSearcherActive(value: boolean) {
    if (!value && this.filterChannelGroups.controls.privateChannels.value.trim().length != 0) {
      return;
    }
    this.filterChannelGroups.patchValue({ 'privateChannels': '' });
    this.privateChannelsSearcherActive = value;
  }

  getDateWithFormat(date, outputFormat) {
    return moment(date, [moment.ISO_8601]).format(outputFormat);
  }

  optimizeMessageHistory(messages) {
    const optimizedHistory = [];
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      if (optimizedHistory.length > 0) {
        const prevMsg = optimizedHistory[optimizedHistory.length - 1];
        const msgDate = moment(msg.ts, moment.ISO_8601);
        const prevMsgDate = moment(prevMsg.ts, moment.ISO_8601);
        if (prevMsg.user === msg.user && msgDate.diff(prevMsgDate, 'minutes') <= 10) {
          optimizedHistory.push({ ...msg, stack: true });
        } else {
          optimizedHistory.push({ ...msg, stack: false });
        }
      } else {
        optimizedHistory.push({ ...msg, stack: false });
      }
    }
    return [...optimizedHistory];
  }

}
