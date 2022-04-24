import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Posts } from '../model/posts';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <li *ngFor="let p of posts">
      {{p.title}}
    </li>
  `,
})
export class PostsComponent {
  posts: Posts[] = [];

  constructor(http: HttpClient) {
    http
      .get<Posts[]>(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((res) => (this.posts = res));
  }
}
