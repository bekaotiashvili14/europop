import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApinewsService {
  private apiUrl =
    'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/latest';

  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
