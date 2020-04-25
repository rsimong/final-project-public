import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';
import { ReplyUser } from '@app/shared/models/replyUser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@shared/services/user.service';
import { ReplyUpdateUser } from '@models/replyUpdateUser';


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
  userProfileEdited: boolean = false;
  generalSettingsEdited: boolean = false;
  previewAvatarProfile: string = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.getCurrentUserValue().subscribe((value: ReplyUser) => this.user = value);
    this.selectedMenuItem = 0;

    this.profileForm = this.fb.group({
      settings: this.fb.group({
        accessibility: this.fb.group({
          fontFamily: [this.user.settings.accessibility.fontFamily || 'default'],
          fontSize: [this.user.settings.accessibility.fontSize || 1],
          highContrast: [this.user.settings.accessibility.highContrast || false]
        }),
        language: [this.user.settings.language || 'es-ES'],
        theme: [this.user.settings.theme || 'light']
      }),
      avatar: [null],
      name: [this.user.name || ''],
      surnames: [this.user.surnames || ''],
      email: [this.user.email || ''],
      password: [''],
      repeat_password: [''],
      old_password: [''],
      username: [this.user.username || '']
    });

    this.onChanges();
  }

  onChanges(): void {
    const profileFields = ['avatar', 'name', 'surnames', 'email'];
    profileFields.forEach(field => {
      this.profileForm.get(field).valueChanges.subscribe(value => {
        let edited = false;
        if (value.trim() !== this.user[field]) {
          edited = true;
        }
        this.userProfileEdited = edited;
      });
    });

    const settingsFields = ['password', 'repeat_password', 'old_password', 'settings.language', 'settings.theme', 'settings.accessibility.fontFamily', 'settings.accessibility.fontSize', 'settings.accessibility.highContrast'];
    settingsFields.forEach(field => {
      this.profileForm.get(field).valueChanges.subscribe(value => {
        let originalValue = (field.indexOf('.') > -1) ? field.split('.').reduce((value, key, index, allValues) => {
          return (allValues[0] === value) ? this.user[value][key] : value[key];
        }) : this.user[field];
        let edited = false;
        value = (typeof value === 'string') ? value.trim() : value;
        if (value !== originalValue) {
          edited = true;
        }
        this.generalSettingsEdited = edited;
      });
    });
  }

  onSubmit(): void {
    if (!this.profileForm.valid) return;
    this.userService.updateUser(this.profileForm.value).then((value: ReplyUpdateUser) => {
      this.authenticationService.setCurrentUser(value.user);
      this.userProfileEdited = false;
      this.generalSettingsEdited = false;
    });
  }

  uploadFile(e) {
    const file = (e.target as HTMLInputElement).files[0];
    this.profileForm.patchValue({ avatar: file });
    this.profileForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => { this.previewAvatarProfile = reader.result as string };
    reader.readAsDataURL(file);
  }

  changeMenuItem(item: Number): void {
    this.selectedMenuItem = item;
  }

  closeSettingsModal(): void {
    this.changeStateSettingsModal.emit(false);
  }

}
