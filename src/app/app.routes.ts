import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)},
    {path: 'concerts', loadComponent: () => import('./pages/concerts/concerts.component').then(mod => mod.ConcertsComponent)},
];
