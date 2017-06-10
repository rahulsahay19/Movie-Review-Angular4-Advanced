import { AuthGuard } from './services/auth-guard.service';
import { RegisterUserComponent } from '../../fw/users/register-user/register-user.component';
import { SignInComponent } from '../../fw/users/sign-in/sign-in.component';
import { MovieMaintComponent } from './movie-maint/movie-maint.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { MoviesComponent } from "app/movies/movies.component";
import { AuthenticatedUserComponent } from "app/authenticated-user/authenticated-user.component";

export const appRoutes: Routes = [
 { path: 'signin', component: SignInComponent },
 { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate:[AuthGuard],
   children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'movie-list/:count', component: MovieListComponent },
          { path: 'movie-detail/:movie/:operation', component: MovieDetailComponent },
          { path: 'movie-maint', component: MovieMaintComponent },
          { path: 'settings', component: SettingsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];