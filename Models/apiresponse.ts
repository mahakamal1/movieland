import { Dates } from "./dates";
import { IMovie } from "./imovie"

export interface APIresponse {
  page:number;
  results:IMovie[];
  total_results:number;
  total_pages:number;
  Prototype: Object;
  dates?:Dates;
}
