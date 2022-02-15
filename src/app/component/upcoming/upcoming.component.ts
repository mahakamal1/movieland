import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIresponse } from 'Models/apiresponse';
import { Dates } from 'Models/dates';
import { IMovie } from 'Models/imovie';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  moiveArry:IMovie[];
  dates:Dates;
  itemsPerPage =20;
  totalItems : any;
  page: number = 1;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUpComing()
  }

  getUpComing(){
    this.http.get(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1size=${this.itemsPerPage}`)
    .subscribe((data:APIresponse)=> {
      this.dates = data.dates;
      this.page =  0;
      this.moiveArry = data.results;
      this.totalItems = data.total_results;
      console.log(data)
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


  gty(page: number){
    this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=${page}&size=${this.itemsPerPage}`)
    .subscribe((data: APIresponse) => {
      this.moiveArry = data.results;
      this.totalItems = data.total_results;
    })
  }

}
