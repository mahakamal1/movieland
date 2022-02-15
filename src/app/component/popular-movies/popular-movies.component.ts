import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIresponse } from 'Models/apiresponse';
import { IMovie } from 'Models/imovie';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit , OnDestroy {
  data:APIresponse;
  itemsPerPage = 6;
  totalItems : number;
  page: number = 1;
  movieImg:string[] = [];
  movieTitel:string[] = [];
  moiveArry:IMovie[] = [];
  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getpopular()
  }
  async getpopular(){
    //return this.popularmovie.getPopularMovies().subscribe(
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1&size=${this.itemsPerPage}`).subscribe(
      (data:APIresponse) => {
        console.log(data)
        this.moiveArry = data.results;
        console.log(this.moiveArry);
        this.page =  0;
        this.totalItems = data.total_results;
      }
    )
  }

  seach(searching:string){
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&query=${searching}&page=1`)
    .subscribe((data:APIresponse) => {
      this.moiveArry = data.results;
      this.totalItems = data.total_results;
    })
   }

  gty(page: number){
    this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=${page}&size=${this.itemsPerPage}`)
    .subscribe((data: APIresponse) => {
      this.moiveArry = data.results;
      this.totalItems = data.total_results;
    })
  }

  ngOnDestroy(): void{

  }


}
