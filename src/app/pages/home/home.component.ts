import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
