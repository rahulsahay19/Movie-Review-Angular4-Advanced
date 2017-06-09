import { MovieMaintComponent } from './movie-maint/movie-maint.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { MoviesComponent } from "app/movies/movies.component";

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie-list/:count', component: MovieListComponent },
  { path: 'movie-detail/:country', component: MovieDetailComponent },
  { path: 'movie-maint', component: MovieMaintComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];