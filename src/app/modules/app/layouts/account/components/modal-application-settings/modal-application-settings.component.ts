import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { ReplyUser } from '@app/shared/models/replyUser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-application-settings',
  templateUrl: './modal-application-settings.component.html',
  styleUrls: ['./modal-application-settings.component.css']
})
export class ModalApplicationSettingsComponent implements OnInit {

  @Output() changeStateSettingsModal = new EventEmitter<Boolean>();

  user: ReplyUser;
  settingsMenu = [
    {
      name: 'Aplication', options: [
        { name: 'Language', template: 0 },
        { name: 'Theme', template: 1 },
        { name: 'Accessibility', template: 2 },
        { name: 'Change Password', template: 3 }
      ]
    },
    {
      name: 'User', options: [
        { name: 'Profile', template: 4 },
        { name: 'Account Management', template: 5 },
        { name: 'Custom Filters', template: 6 }
      ]
    },
  ];
  selectedMenuItem: Number;
  profileForm: FormGroup;
  changePassForm: FormGroup;
  integrations = [
    {
      icon: {
        tag: 'i',
        src: 'fab fa-google'
      },
      name: 'Gmail',
      description: 'It\'s a free email service provided by the company Google.',
      brandColor: '#D44638'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-facebook-f'
      },
      name: 'Facebook',
      description: 'It\'s online social media and social networking service.',
      brandColor: '#1778F2'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-slack'
      },
      name: 'Slack',
      description: 'It\'s a cloud-based instant messaging platform.',
      brandColor: '#CF0E5B'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-windows'
      },
      name: 'Outlook',
      description: 'It\'s a suite of webmail, contacts, tasks, and calendaring services.',
      brandColor: '#0072C6'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-whatsapp'
      },
      name: 'WhatsApp Messenger',
      description: 'It\'s an instant messaging application for smartphones, in which messages are sent and received via the Internet.',
      brandColor: '#128c7e'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-telegram-plane'
      },
      name: 'Telegram',
      description: 'It\'s a messaging and VOIP platform. It is focused on instant messaging, sending multiple files and mass communication.',
      brandColor: '#0088cc'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-instagram'
      },
      name: 'Instagram',
      description: 'It\'s an American photo and video-sharing social networking service owned by Facebook, Inc.',
      brandColor: '#c13584'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-twitter'
      },
      name: 'Twitter',
      description: 'It\'s an American microblogging and social networking service on which users post and interact with messages.',
      brandColor: '#1da1f2'
    },
    {
      icon: {
        tag: 'i',
        src: 'fab fa-snapchat-ghost'
      },
      name: 'Snapchat',
      description: 'It\'s a messaging application for smartphones with multimedia support for image, video and augmented reality filters.',
      brandColor: 'rgb(234, 232, 61)'
    }
  ];

  userProfileEdited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = null;
    this.selectedMenuItem = 0;

    this.profileForm = this.fb.group({
      avatar: [''],
      name: [''],
      surnames: [''],
      email: [''],
      settings: this.fb.group({
        language: ['es'],
        accessibility: this.fb.group({
          fontFamily: ['roboto'],
          fontSize: [15],
          highContrast: [false]
        })
      })
    });

    this.changePassForm = this.fb.group({
      oldPwd: [''],
      newPwd: [''],
      confirmNewPwd: ['']
    });

    this.onChanges();
  }

  onChanges(): void {
    const fields = ['avatar', 'name', 'surname', 'email'];
    fields.forEach(field => {
      this.profileForm.get(field).valueChanges.subscribe(value => {
        let edited = false;
        for (let i = 0; i < fields.length; i++) {
          const fieldName = fields[i];
          const fieldValueLength = (fieldName !== field) ? this.profileForm.value[fieldName].length : value.length;
          if (fieldValueLength > 0) {
            edited = true;
            break;
          }
        }
        this.userProfileEdited = edited;
      });
    });
  }

  changeMenuItem(item: Number): void {
    this.selectedMenuItem = item;
  }

  closeSettingsModal(): void {
    this.changeStateSettingsModal.emit(false);
  }

  getIconByType(type: string) {
    return this.integrations.find((api) => api.name.toLocaleLowerCase() === type).icon.src;
  }

  getColorIconByType(type: string) {
    return this.integrations.find((api) => api.name.toLocaleLowerCase() === type).brandColor;
  }

}
