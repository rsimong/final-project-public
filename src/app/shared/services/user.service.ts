import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { ReplyUser } from '@app/shared/models/replyUser';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<ReplyUser> {
    return this.http.get<ReplyUser>(`${environment.apiUrl}/users/me/profile`);
  }
}
