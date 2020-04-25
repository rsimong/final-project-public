import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { ReplyUser } from '@models/replyUser';
import { ReplyUpdateUser } from '@models/replyUpdateUser';
import { RequestUpdateUser } from '@models/requestUpdateUser';
import { Observable } from 'rxjs';

import { createFormData } from '@shared/helpers/toFormData';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<ReplyUser> {
    return this.http.get<ReplyUser>(`${environment.apiUrl}/users/me/profile`);
  }

  updateUser(body: RequestUpdateUser): Promise<ReplyUpdateUser> {
    return this.http.put<ReplyUpdateUser>(`${environment.apiUrl}/users/me`, createFormData(body)).toPromise();
  }

}
