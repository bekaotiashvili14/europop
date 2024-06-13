import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiawayMeetingsService } from '../../services/apiaway-meetings.service';

@Component({
  selector: 'app-away-meetings',
  templateUrl: './away-meetings.component.html',
  styleUrls: ['./away-meetings.component.scss'],
})
export class AwayMeetingsComponent implements OnInit, AfterViewInit {
  images: any[] = [];
  maxScrollLeft: number = 0;
  thumbWidth: number = 0;
  selectedVideoId: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private ApiawayMeetingsService: ApiawayMeetingsService
  ) {}

  ngOnInit(): void {
    this.ApiawayMeetingsService.getImages().subscribe((data) => {
      this.images = data.data.items;
      console.log(this.images);
      if (this.images.length > 0) {
        this.selectedVideoId = this.images[0].youtubeVideoId;
        console.log(this.selectedVideoId);
      }

      setTimeout(() => {
        this.initSlider();
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    this.initSlider();
  }

  @HostListener('window:resize')
  onResize() {
    this.initSlider();
  }

  initSlider() {
    const imageList = document.querySelector(
      '.slider-wrapper .image-list'
    ) as HTMLElement;
    const sliderScrollbar = document.querySelector(
      '.container .slider-scrollbar'
    ) as HTMLElement;
    const scrollbarThumb = sliderScrollbar?.querySelector(
      '.scrollbar-thumb'
    ) as HTMLElement;

    if (!imageList || !sliderScrollbar || !scrollbarThumb) {
      console.error('One or more elements are not found:', {
        imageList,
        sliderScrollbar,
        scrollbarThumb,
      });
      return;
    }

    this.maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    this.thumbWidth = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

    scrollbarThumb.addEventListener('mousedown', (e: MouseEvent) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;

      const handleMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(
          0,
          Math.min(this.thumbWidth, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / this.thumbWidth) * this.maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / this.maxScrollLeft) * this.thumbWidth;
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener('scroll', () => {
      updateScrollThumbPosition();
    });

    updateScrollThumbPosition();
  }

  onImageClick(videoId: string): void {
    this.selectedVideoId = videoId;
  }

  get videoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.selectedVideoId}`
    );
  }

  clearImages() {
    this.images = [];
  }
}
