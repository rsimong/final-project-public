import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  pagination = {
    page: 1,
    pages: 4,
    itemsPerPages: 50
  };

  searcherForm: FormGroup;

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

  response = [];

  messagesGroups = [
    [
      {
        id: 1,
        from: 'jmartinez@gmail.com',
        to: ['jmartinez@gmail.com'],
        subject: 'Hola mundo!',
        body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tellus a auctor suscipit. Fusce aliquet rutrum nulla, nec vulputate nibh lobortis in. Donec sit amet risus volutpat, commodo metus ac, dictum orci. Sed posuere quam risus, non efficitur lorem tincidunt et. Sed et magna nec libero iaculis mattis eget in ante. Curabitur ac erat sed purus egestas ornare. Nullam elementum leo a quam finibus mollis. Sed feugiat sollicitudin dui, et mattis risus efficitur eu. Aliquam ornare augue a ante lobortis ullamcorper. Maecenas mattis sagittis urna id posuere. Aliquam vulputate tortor ipsum, sed pharetra magna ultrices a. Mauris pharetra consequat porttitor. Duis libero enim, cursus id mi suscipit, eleifend ultricies eros. '],
        sended: ''
      },
      {
        id: 2,
        from: 'rsimon@gmail.com',
        to: ['jmartinez@gmail.com'],
        subject: 'Hola mundo!',
        body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tellus a auctor suscipit. Fusce aliquet rutrum nulla, nec vulputate nibh lobortis in. Donec sit amet risus volutpat, commodo metus ac, dictum orci. Sed posuere quam risus, non efficitur lorem tincidunt et. Sed et magna nec libero iaculis mattis eget in ante. Curabitur ac erat sed purus egestas ornare. Nullam elementum leo a quam finibus mollis. Sed feugiat sollicitudin dui, et mattis risus efficitur eu. Aliquam ornare augue a ante lobortis ullamcorper. Maecenas mattis sagittis urna id posuere. Aliquam vulputate tortor ipsum, sed pharetra magna ultrices a. Mauris pharetra consequat porttitor. Duis libero enim, cursus id mi suscipit, eleifend ultricies eros. '],
        sended: ''
      },
      {
        id: 3,
        from: 'oriol@gmail.com',
        to: ['jmartinez@gmail.com'],
        subject: 'Hola mundo!',
        body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tellus a auctor suscipit. Fusce aliquet rutrum nulla, nec vulputate nibh lobortis in. Donec sit amet risus volutpat, commodo metus ac, dictum orci. Sed posuere quam risus, non efficitur lorem tincidunt et. Sed et magna nec libero iaculis mattis eget in ante. Curabitur ac erat sed purus egestas ornare. Nullam elementum leo a quam finibus mollis. Sed feugiat sollicitudin dui, et mattis risus efficitur eu. Aliquam ornare augue a ante lobortis ullamcorper. Maecenas mattis sagittis urna id posuere. Aliquam vulputate tortor ipsum, sed pharetra magna ultrices a. Mauris pharetra consequat porttitor. Duis libero enim, cursus id mi suscipit, eleifend ultricies eros. '],
        sended: ''
      },
    ]
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.searcherForm = this.fb.group({
      searcher: ['']
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

}
