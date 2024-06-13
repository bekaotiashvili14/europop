import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiawayMeetingsService {
  private apiUrl =
    'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/video-galleries/142';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
