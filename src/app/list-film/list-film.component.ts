import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmItemComponent} from '../film-item/film-item.component';
import {FilmService} from '../filmServices/service';
import { film } from '../modul/movie';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule, FilmItemComponent,HttpClientModule,SearchComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css',
  providers: [FilmService],
})

export class ListFilmComponent implements OnInit{
  films : film[] =[];
  filmSearch : film[] =[];

  serched!:String
  constructor(private filmService: FilmService){

  }
  handleClick($event: string) {
    alert($event)
  }

  ngOnInit() {
    this.filmService.getMovies().subscribe((data: any) => {
      this.films = data.results.map(
        (film:any) => ({
          id: film.id,
          title: film.title,
          year: film.release_date,
          description: film.overview,
          imageUrl: film.poster_path
        })
      )
      this.filmSearch = data.results.map(
        (film:any) => ({
          id: film.id,
          title: film.title,
          year: film.release_date,
          description: film.overview,
          imageUrl: film.poster_path
        })
      )
    })
  }
onchange(serchedTerm:String){
  this.serched=serchedTerm;
  this.serchFilmfnc()
}
serchFilmfnc(){
  if(!this.serched){
    this.filmSearch=this.films;
  }
  else{
    this.filmSearch=this.films.filter(film=>film.title.toLowerCase().includes(this.serched.toLowerCase()))
  }
}

}
  