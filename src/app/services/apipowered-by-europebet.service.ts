import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApipoweredByEuropebetService {
  private poweredAPi =
    'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/powered-by-europebet?size=10';
  constructor(private _Http: HttpClient) {}

  getPoweredApi() {
    return this._Http.get(this.poweredAPi);
  }
}
