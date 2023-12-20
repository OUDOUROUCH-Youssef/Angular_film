import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmItemComponent} from '../film-item/film-item.component';
import {FilmService} from '../filmServices/service';
import { film } from '../modul/movie';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule, FilmItemComponent,HttpClientModule],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css',
  providers: [FilmService],
})

export class ListFilmComponent implements OnInit{
  films : film[] =[];;
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
    })
  }


}
  