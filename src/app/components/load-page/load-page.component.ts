import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss'],
})
export class LoadPageComponent {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    this.animationService.animateText();
  }
}
