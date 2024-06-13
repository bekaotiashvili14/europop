import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApipostPageService {
  constructor(private _http: HttpClient) {}

  getPosts(id: number) {
    const apiUrl = `http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/${id}`;
    return this._http.get(apiUrl);
  }
}
