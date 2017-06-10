import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../view-models/movie';
import { AppDataService } from '../services/app-data.service';


@Component({
  selector: 'app-movie-maint',
  templateUrl: './movie-maint.component.html',
  styleUrls: ['./movie-maint.component.css']
})
export class MovieMaintComponent {

  movies : Array<Movie>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) { 
    dataService.getMovies().subscribe((data) => this.movies = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createMovie() {
    this.router.navigate(['/authenticated/movie-detail', 0, 'create']);
  }

  deleteMovie(id: number) {
    this.isDeleting = true;
    this.dataService.deleteMovie(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteMovieQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editMovie(id: number) {
    this.router.navigate(['/authenticated/movie-detail', id, 'edit']);
  }

  showMovieDetail(id: number) {
    this.router.navigate(['/authenticated/movie-detail', id, 'details']);
  }

}
