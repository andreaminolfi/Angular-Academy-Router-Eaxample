import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  template: `
    <h1>Comments</h1>
    <!--<pre>{{comments | json}}</pre>-->
    
    <li *ngFor="let comment of comments">
      {{comment.body}}
    </li>

  `,
})
export class CommentsComponent {
  comments: Comment[] = [];

  constructor(activatedRoute: ActivatedRoute, http: HttpClient) {
    const postId = activatedRoute.snapshot.params.postId;
    http
      .get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
      .subscribe((res) => (this.comments = res));
  }
}
