import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adoption', component: AdoptionComponent },
];
