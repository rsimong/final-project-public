import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ReplyApi } from '@models/replyApi';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<ReplyApi[]> {
    return this.http.get<ReplyApi[]>(`${environment.apiUrl}/apis`);
  }

  requestAccessToken(apiId: string, body: Object = {}): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/apis/${apiId}/oauth`, { ...body }).toPromise();
  }
}
