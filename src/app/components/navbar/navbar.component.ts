import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuVisible: boolean = false;
  loginVisible: boolean = false;
  accountHoverVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    if (this.menuVisible) {
      this.loginVisible = false;
      this.accountHoverVisible = false;
    }
  }

  toggleLogin() {
    this.loginVisible = !this.loginVisible;
    if (this.loginVisible) {
      this.menuVisible = false;
      this.accountHoverVisible = false;
    }
  }

  toggleAccountHover() {
    this.accountHoverVisible = !this.accountHoverVisible;
    if (this.accountHoverVisible) {
      this.menuVisible = false;
      this.loginVisible = false;
    }
  }
  searchValue: string = '';

  submitForm() {
    document.forms[0].submit();
  }

  onSubmit() {
    console.log('Search value:', this.searchValue);
  }
}
