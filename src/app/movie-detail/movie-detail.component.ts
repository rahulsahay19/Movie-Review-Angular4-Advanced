import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute,Params, Router  } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Movie } from '../view-models/movie';
import { FieldDefinition } from '../../../fw/dynamic-forms/field-definition';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  movieDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Movie Name',
      required: true
    },
    {
      key: 'directorName',
      type: 'string',
      isId: false,
      label: 'Director Name',
      required: true
    },
    {
      key: 'releaseYear',
      type: 'string',
      isId: false,
      label: 'Release Year',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private dataService: AppDataService) { }

  createMovie(movie: Movie) {
    movie.id = 0;
    this.errorMessage = null;
    this.dataService.createMovie(movie).subscribe(
      c => this.router.navigate(['/authenticated/movie-maint']),
      err => this.errorMessage = 'Error creating movie'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.movie = { id: 0, name: "", directorName:null,releaseYear:null };
    }
    else{
      console.log("id:- "+this.route.snapshot.params['id']);
      console.log("value:- "+this.route.snapshot.params[0]);
      // this.dataService.getMovie(this.route.snapshot.params['id']) TODO:- Need to check, why this is not working
      this.dataService.getMovie(this.route.snapshot.params.movie)
        .subscribe((movie: Movie) => this.movie = movie);
      }
  }

  updateCountry(movie: Movie) {
    this.errorMessage = null;
    this.dataService.updateMovie(movie).subscribe(
      c => this.router.navigate(['/authenticated/movie-maint']),
      err => this.errorMessage = 'Error updating movie'
      );
  }

}