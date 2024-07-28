import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatsData } from '../../interfaces/cat.interface';
import { CatApiService } from '../../services/cat-api.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  catsData: CatsData[] = [];
  error = false;
  isLoading = true;

  constructor(
    private catApiService: CatApiService,
    private router: Router,
    private logger: NGXLogger
  ) {}

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
        this.error = true;
        this.logger.error('Falha na requisição', err);
      },
    });
  }

  showForm() {
    this.router.navigate(['/adoption']);
  }
}
