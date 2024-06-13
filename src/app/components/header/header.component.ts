import { Component, OnInit } from '@angular/core';
import { ApiheaderService } from '../../services/apiheader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainPosts: any[] = [];
  array: number[] = [];
  effect: string = 'scrollx';

  constructor(private apiheaderService: ApiheaderService) {}

  ngOnInit(): void {
    this.apiheaderService.getfeaturedPosts().subscribe((data: any) => {
      this.mainPosts = data.data;
      console.log(data.data);
      this.initializeCarousel();
    });
  }

  initializeCarousel(): void {
    this.array = this.mainPosts.map((_, index) => index + 1);
  }
}
