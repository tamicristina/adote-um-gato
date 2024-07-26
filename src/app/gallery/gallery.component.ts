import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatsData } from '../interfaces/cat.interface';
import { CatApiService } from '../services/cat-api.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  catsData: CatsData[] = [];
  error: string | null = null;

  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.loadCatImages();
  }

  loadCatImages(): void {
    this.catApiService.getCatImagesWithBreedData().subscribe({
      next: (data) => {
        this.catsData = data;
      },
      error: (err) => {
        this.error = 'Failed to load cat images';
        console.error(err);
      },
    });
  }
}
