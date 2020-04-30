import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  externalRequest(method: 'GET' | 'POST', url: string, headers: any, body: any): Promise<any> {
    const requestHeaders = new HttpHeaders({ ...headers });
    switch (method) {
      case 'GET':
        return this.http.get(url, { headers: requestHeaders }).toPromise();
      case 'POST':
        const requestBody = this.setBodyParams(headers['Content-Type'], body);
        return this.http.post(`https://cors-anywhere.herokuapp.com/${url}`, requestBody, { headers: requestHeaders }).toPromise();
    }
  }

  private setBodyParams(contentType: string, bodyParams: any): URLSearchParams | Object {
    switch (contentType) {
      case 'application/x-www-form-urlencoded':
        let body = Object.keys(bodyParams)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(bodyParams[key]))
          .join('&');
        return body;
      default:
        return bodyParams;
    }
  }
}
