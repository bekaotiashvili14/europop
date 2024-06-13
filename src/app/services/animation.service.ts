import { Injectable } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  public animateText(): void {
    const textElement = document.querySelector('.text');
    if (textElement) {
      textElement.innerHTML =
        textElement.textContent?.replace(/\S/g, '<span>$&</span>') || '';

      anime
        .timeline({ loop: true })
        .add({
          targets: '.text span',
          translateY: [-600, 0],
          scale: [15, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1300,
          delay: anime.stagger(100),
        })
        .add({
          targets: '.text span',
          translateX: [1000, 0],
          scale: [1, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 3000,
          delay: anime.stagger(100),
        })
        .add({
          targets: '.text span',
          translateX: [0, 0],
          scale: [1, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 3000,
          delay: anime.stagger(100),
        });
    }
  }
}
