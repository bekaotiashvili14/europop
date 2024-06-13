import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Author {
  id: number;
  firstName: string;
  lastName: string;
  avatar: {
    fileUrl: string;
  };
  subscribersCount: number;
  likesCount: number;
}
@Component({
  selector: 'app-popular-authors',
  templateUrl: './popular-authors.component.html',
  styleUrl: './popular-authors.component.scss',
})
export class PopularAuthorsComponent implements OnInit, AfterViewInit {
  authors: Author[] = [];
  private scrollAmount: number = 200;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  fetchAuthors(): void {
    this.http
      .get<any>(
        'http://localhost:3000/proxy?targetUrl=https://europop.ge/api/authors?page=1&size=15'
      )
      .subscribe((data) => {
        this.authors = data.data;
      });
  }

  viewProfile(authorId: number): void {
    console.log('View profile of author with ID:', authorId);
  }

  ngAfterViewInit(): void {
    this.initSlider();
  }

  @HostListener('window:resize')
  onResize() {
    this.initSlider();
  }

  scrollLeft() {
    const imageList = document.querySelector(
      '.slider-wrapperAuthor .image-listAuthor'
    ) as HTMLElement;
    imageList.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    const imageList = document.querySelector(
      '.slider-wrapperAuthor .image-listAuthor'
    ) as HTMLElement;
    imageList.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }

  initSlider() {}
}
