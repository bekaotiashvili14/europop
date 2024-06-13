import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApinewstickerService {
  private _NewsLatestUrl =
    'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/more-latest';

  constructor(private _http: HttpClient) {}

  getNewsLatest() {
    return this._http.get(this._NewsLatestUrl);
  }
}
