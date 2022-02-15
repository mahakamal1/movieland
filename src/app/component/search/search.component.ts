import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  seach(searching:string){
   this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=0acb2c4b48bf920c842e74ca1bc13fb2&language=en-US&query=${searching}&page=1`)
   .subscribe((data) => {
     console.log(data)
   })
  }

}
