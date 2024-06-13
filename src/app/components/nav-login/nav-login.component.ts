import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrl: './nav-login.component.scss',
})
export class NavLoginComponent {
  loginVisible: boolean = true;

  toggleLogin() {
    this.loginVisible = !this.loginVisible;
  }
}
