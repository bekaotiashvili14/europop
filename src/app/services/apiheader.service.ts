import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiheaderService {
  constructor(private _http: HttpClient) {}
  private _featuredPostsUrl =
    'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/featured-posts';
  getfeaturedPosts() {
    return this._http.get(this._featuredPostsUrl);
  }
}
