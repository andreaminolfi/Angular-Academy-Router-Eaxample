import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-album',
  template: `
    <h1>Photos</h1>
    <li *ngFor="let photo of photos">
      <pre>{{photos | json}}</pre>
    </li>
  `,
})
export class AlbumComponent {
  photos: Photo[] = [];

  constructor(activatedRoute: ActivatedRoute, http: HttpClient) {
    const albumId = activatedRoute.snapshot.params.albumId;
    http
      .get<Photo[]>(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      )
      .subscribe((res) => (this.photos = res));
  }
}
