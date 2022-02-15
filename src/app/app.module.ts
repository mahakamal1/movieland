import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http';
import { PopularMoviesComponent } from './component/popular-movies/popular-movies.component';
import { DetailsComponent } from './component/details/details.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { TopratedComponent } from './component/toprated/toprated.component';
import { NgxPaginationModule } from "ngx-pagination";
import { UpcomingComponent } from './component/upcoming/upcoming.component';
import { SearchComponent } from './component/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    DetailsComponent,
    NavbarComponent,
    FooterComponent,
    TopratedComponent,
    UpcomingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
