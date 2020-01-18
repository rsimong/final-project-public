import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/apis`);
  }
}
