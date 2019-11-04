import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env';
import { User } from '@models/users';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map((user: User) => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        if (localStorage.getItem('lastUser')) { localStorage.removeItem('lastUser'); }
        return user;
      }));
  }

  logout() {
    localStorage.setItem('lastUser', JSON.stringify({
      username: this.currentUserValue.username,
      name: this.currentUserValue.name,
      surname: this.currentUserValue.surname,
      avatar: this.currentUserValue.avatar
    }));
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
