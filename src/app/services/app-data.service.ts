import { UserService } from './user-service';
import {  Movie } from '../view-models/movie';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';



@Injectable()
export class AppDataService {

  private movies : Array<Movie> = [
    { id: 1, name:"Die Another Day", directorName:"Lee Tamahori",releaseYear:"2002"  },
    { id: 2, name:"Broken Arrow",   directorName:"John Woo",releaseYear:"1996" },
    { id: 3, name:"Top Gun", directorName:"Tony Scott",releaseYear:"1986" },
    { id: 4, name:"Day After Tomorrow", directorName:"Roland Emmerich",releaseYear:"2004" },
    { id: 5, name:"Titanic", directorName:"James Cameron",releaseYear:"1997" },
    { id: 6, name:"Jurassic World", directorName:"Colin Trevorrow",releaseYear:"2015" },
    { id: 7, name:"Grease", directorName:"Randal Kleiser",releaseYear:"1978" },
    { id: 8, name:"Anaconda", directorName:"Luis Llosa",releaseYear:"1997" },
    { id: 9, name:"Lake Placid", directorName:"Steve Miner",releaseYear:"1999" },
    { id: 10, name:"Superman", directorName:"Richard Donner",releaseYear:"1978" }
  ];

  constructor(private userService: UserService) {
  }

  createMovie(vm: Movie) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create movie'));
    let id = 0;
    this.movies.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.movies.push(vm);
    return Observable.of(vm);
  }

  deleteMovie(id: number) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.movies.splice(this.movies.findIndex(c => c.id == id), 1));
  }

  getMovies() : Observable<any> {
    return Observable.of(this.movies);
  }

  getMovie(id: number) : Observable<Movie> {
    var movie = this.movies.find(c => c.id == id);
    return Observable.of(movie);
  }

  updateMovie(updatedMovie: Movie) : Observable<any> {
    var movie = this.movies.find(c => c.id == updatedMovie.id);
    Object.assign(movie, updatedMovie);
    return Observable.of(movie).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }
  
}
