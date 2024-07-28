import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatsData } from '../../interfaces/cat.interface';
import { CatApiService } from '../../services/cat-api.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  catsData: CatsData[] = [];
  error: string | null = null;
  isLoading = true;

  constructor(private catApiService: CatApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCatImages();
  }

  loadCatImages(): void {
    this.catApiService.getCatImagesWithBreedData().subscribe({
      next: (data) => {
        this.catsData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'Failed to load cat images';
        console.error(err);
      },
    });
  }

  showForm() {
    this.router.navigate(['/adoption']);
  }
}
