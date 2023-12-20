import { Injectable } from '@angular/core';
import { film } from '../modul/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e5862177b4f7bf6741b175936467976';
  private API_TOKEN = "1e5862177b4f7bf6741b175936467976"



  constructor(private http: HttpClient) {}

  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }
}