import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-connect-account',
  templateUrl: './modal-connect-account.component.html',
  styleUrls: ['./modal-connect-account.component.css']
})
export class ModalConnectAccountComponent implements OnInit {

  @Output() changeStateStoreModal = new EventEmitter<Boolean>();

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

  constructor() { }

  ngOnInit() {
  }

  closeStoreModal() {
    this.changeStateStoreModal.emit(false);
  }

}
