import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public loadingService: LoadingService) {}
}
