import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApipostPageService } from '../../services/apipost-page.service';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent {
  posts: any;

  constructor(
    private ApipostPageService: ApipostPageService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this.ApipostPageService.getPosts(id).subscribe((data) => {
        this.posts = data;
        console.log(data);
      });
    });
  }
}
