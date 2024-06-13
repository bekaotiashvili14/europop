import { Component } from '@angular/core';
import { ApinewstickerService } from '../../services/apinewsticker.service';
@Component({
  selector: 'app-newsticker',
  templateUrl: './newsticker.component.html',
  styleUrl: './newsticker.component.scss',
})
export class NewstickerComponent {
  newsPosts: any = [];

  constructor(private ApinewstickerService: ApinewstickerService) {}

  ngOnInit() {
    this.getNewsLatest();
  }

  getNewsLatest(): void {
    this.ApinewstickerService.getNewsLatest().subscribe((data) => {
      this.newsPosts = data;
    });
  }
}
