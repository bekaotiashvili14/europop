import { Component } from '@angular/core';
import { ApipoweredByEuropebetService } from '../../services/apipowered-by-europebet.service';
@Component({
  selector: 'app-powered-by-europebet',
  templateUrl: './powered-by-europebet.component.html',
  styleUrl: './powered-by-europebet.component.scss',
})
export class PoweredByEuropebetComponent {
  PostCard: any = [];
  constructor(
    private ApipoweredByEuropebetService: ApipoweredByEuropebetService
  ) {}
  ngOnInit() {
    this.getPoweredApi();
  }
  getPoweredApi(): void {
    this.ApipoweredByEuropebetService.getPoweredApi().subscribe((data) => {
      this.PostCard = data;
      console.log(data);
    });
  }
}
