import { Routes } from '@angular/router';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adoption', component: AdoptionComponent },
];
