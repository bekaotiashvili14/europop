import { Component } from '@angular/core';
import { ApinewsService } from '../../services/apinews.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsPosts: any[] = [];

  constructor(private apinewsService: ApinewsService) {}

  ngOnInit(): void {
    this.apinewsService.getLatestNews().subscribe((data) => {
      this.newsPosts = data.data;
    });
  }
}
