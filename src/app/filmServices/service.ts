import { Injectable } from '@angular/core';
import { User} from '../modul/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../modul/favorite';
import { Commantaire } from '../modul/comment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e5862177b4f7bf6741b175936467976';
  private API_TOKEN = "1e5862177b4f7bf6741b175936467976";
  private apiUrl1 = 'http://localhost:8080';



  constructor(private http: HttpClient) {}

  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w500' + poster_path
  }






  getFavorites(id_user:number): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiUrl1}/favorite/getFavorite?id=${id_user}`);
  }

  postFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiUrl1}/favorite/postFavorite`, favorite);
  }

  getComment(id_film:number): Observable<Commantaire[]> {
    return this.http.get<Commantaire[]>(`${this.apiUrl1}/comment/getComment?id=${id_film}`);
  }

  postComment(comment: Commantaire): Observable<Commantaire> {
    return this.http.post<Commantaire>(`${this.apiUrl1}/comment/postComment`, comment);
  }


  postClient(clt:User): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl1}/user/saveUser`, clt);
  }
  getClient():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl1}/user/getUser`);
  }
}