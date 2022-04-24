import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-album',
  template: `
    <h1>Photos</h1>
    <img *ngFor="let photo of photos" [src]="photo.thumbnailUrl"/>
    <hr/>
    <button routerLink="/catalog">Back</button>
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
