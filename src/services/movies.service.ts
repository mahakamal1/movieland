import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3/movie/popular?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1"
  constructor(private http:HttpClient) { }
  getPopularMovies(){
    return this.http.get(this.baseUrl);
  }
  getTopReted(){
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1")
  }

}
