import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComment } from '../model/comment';
import { Posts } from '../model/posts';

@Component({
  selector: 'app-comments',
  template: `
    <h1>Comments</h1>
    <!--<pre>{{comments | json}}</pre>-->
    
    <h2>{{posts.title}}</h2>

    <li *ngFor="let comment of comments">
      {{comment.body}}
    </li>

  `,
})
export class CommentsComponent {
  comments: PostComment[] = [];
  posts: Posts = null;

  constructor(activatedRoute: ActivatedRoute, http: HttpClient) {
    const postId = activatedRoute.snapshot.params.postId;
    http
      .get<Posts>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe((res) => (this.posts = res));
    http
      .get<PostComment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
      .subscribe((res) => (this.comments = res));
  }
}
