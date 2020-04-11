import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '@env';
import { ReplyUser } from '@app/shared/models/replyUser';
import { RequestLogin } from '@models/requestLogin';
import { RequestRegister } from '@models/requestRegister';
import { ReplyAuth } from '@models/replyAuth';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(body: RequestLogin): Promise<ReplyAuth> {
    return this.http.post<ReplyAuth>(`${environment.apiUrl}/auth/login`, { ...body })
      .pipe<ReplyAuth>(map<ReplyAuth, ReplyAuth>((value: ReplyAuth) => {
        localStorage.setItem('authToken', value.access_token);
        return value;
      }))
      .toPromise();
  }

  register(body: RequestRegister): Promise<ReplyAuth> {
    return this.http.post<ReplyAuth>(`${environment.apiUrl}/auth/register`, { ...body })
      .pipe<ReplyAuth>(map<ReplyAuth, ReplyAuth>((value: ReplyAuth) => {
        localStorage.setItem('authToken', value.access_token);
        return value;
      }))
      .toPromise();
  }

  logout() {
    // localStorage.setItem('lastUser', JSON.stringify({
    //   username: this.currentUserValue.username,
    //   name: this.currentUserValue.name,
    //   surname: this.currentUserValue.surname,
    //   avatar: this.currentUserValue.avatar
    // }));
    // // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    this.router.navigate(['/app/auth/login']);
  }
}
