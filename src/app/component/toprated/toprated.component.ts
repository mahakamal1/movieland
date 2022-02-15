import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIresponse } from 'Models/apiresponse';
import { IMovie } from 'Models/imovie';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  constructor(private http:HttpClient) { }
  moiveArry:IMovie[];
  data:APIresponse;
  itemsPerPage = 20;
  totalItems : number;
  page: number = 1;
  ngOnInit(): void {
    this.getTopRated();
  }
  getTopRated(){
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1&size=${this.itemsPerPage}`).subscribe(
      (data:APIresponse) => {
        console.log(data)
        this.moiveArry = data.results;
        console.log(this.moiveArry);
        this.page =  0;
        this.totalItems = data.total_results;
      }
    )
  }


  gty(page: number){
    this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=${page}&size=${this.itemsPerPage}`)
    .subscribe((data: APIresponse) => {
      this.moiveArry = data.results;
      this.totalItems = data.total_results;
    })
  }
  seach(searching:string){
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&query=${searching}&page=2&size=${this.itemsPerPage}`)
    .subscribe((data:APIresponse) => {
      this.moiveArry = data.results;
      console.log(this.moiveArry);
      this.page =  0;
      this.totalItems = data.total_results;
    })
   }

}
