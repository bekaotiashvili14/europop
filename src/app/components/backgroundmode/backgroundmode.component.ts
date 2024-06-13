import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-backgroundmode',
  templateUrl: './backgroundmode.component.html',
  styleUrl: './backgroundmode.component.scss',
})
export class BackgroundmodeComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  toggleDarkMode(): void {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      this.renderer.removeClass(body, 'dark-mode');
      localStorage.setItem('dark-mode', 'false');
    } else {
      this.renderer.addClass(body, 'dark-mode');
      localStorage.setItem('dark-mode', 'true');
    }
  }
}
