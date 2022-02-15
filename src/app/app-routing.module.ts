import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { PopularMoviesComponent } from './component/popular-movies/popular-movies.component';
import { TopratedComponent } from './component/toprated/toprated.component';
import { UpcomingComponent } from './component/upcoming/upcoming.component';

const routes: Routes = [
  {path:"",component:PopularMoviesComponent},
  {path:"movie/:id",component:DetailsComponent},
  {path:'Upcoming',component:UpcomingComponent},
  {path:"toprated",component:TopratedComponent},
  {path:"toprated/movie/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
