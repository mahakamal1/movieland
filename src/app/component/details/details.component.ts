import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIresponse } from 'Models/apiresponse';
import { IMovie } from 'Models/imovie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClient , private router:Router) { }
  id:number;
  datafromApi :APIresponse;
  similerMovieArr : IMovie[];
  slicedMovieArr:IMovie[] ;
  ngOnInit(): void {
    this.getId()
    this.getMovieDetail(this.id)
    this.getSimaler(this.id)
  }
  getId(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
  getMovieDetail(ID:number){
    this.id = ID;
    let key =this.id.toString() +"?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US";
      this.http.get("https://api.themoviedb.org/3/movie/"+key)
        .subscribe((data:APIresponse) => {
          this.datafromApi = data;
          console.log(data);
        });
    }
    getSimaler(ID:number){
      this.id = ID;
      let key =this.id.toString() +"/similar?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&page=1";
      this.http.get("https://api.themoviedb.org/3/movie/"+key)
        .subscribe((data:APIresponse) => {
          console.log(data);
          this.similerMovieArr = data.results;
          this.slicedMovieArr= this.similerMovieArr.slice(0,4);
          console.log(this.slicedMovieArr)
          console.log(this.similerMovieArr);
        });
    }

}
