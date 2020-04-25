import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '@env';
import { RequestLogin } from '@models/requestLogin';
import { RequestRegister } from '@models/requestRegister';
import { ReplyAuth } from '@models/replyAuth';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ReplyUser } from '@models/replyUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private currentUser$: BehaviorSubject<ReplyUser> = new BehaviorSubject<ReplyUser>(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUser$ = new BehaviorSubject<ReplyUser>(null);
  }

  setCurrentUser(value: ReplyUser): void {
    console.log(value);
    this.currentUser$.next(value);
  }

  getCurrentUserValue(): Observable<ReplyUser> {
    return this.currentUser$.asObservable();
  }

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
    // // remove user from local storage to log user out
    localStorage.removeItem('authToken');
    this.router.navigate(['/app/auth/login']);
  }
}
