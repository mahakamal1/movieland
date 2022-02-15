import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts:any;
  constructor(private http:HttpClient) {


  }
  ngOnInit(){
    //this.getAllUsers();
    AOS.init();
  }
  title = 'testy';
  // getAllUsers(){
  //   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  //     (data) => {
  //       this.posts = data;
  //       console.log(data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }
}
