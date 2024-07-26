import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatsData } from '../../interfaces/cat.interface';
import { CatApiService } from '../../services/cat-api.service';
import { MatDialog } from '@angular/material/dialog';
import { CatDetailsModalComponent } from '../cat-details-modal/cat-details-modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  catsData: CatsData[] = [];
  error: string | null = null;

  constructor(private catApiService: CatApiService, public dialog: MatDialog) {}

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

  getRandomGridClass(): string {
    const classes = ['wide', 'tall', 'big'];
    return classes[Math.floor(Math.random() * classes.length)];
  }

  openDialog(): void {
    this.dialog.open(CatDetailsModalComponent, {
      width: '400px',
    });
  }
}
