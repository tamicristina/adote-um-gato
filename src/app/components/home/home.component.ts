import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { GalleryComponent } from '../../gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
