import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { film } from '../modul/movie';
import {FilmItemComponent} from '../film-item/film-item.component';
import { FilmService } from '../filmServices/service';
import { Favorite } from '../modul/favorite';
import { Observable,forkJoin } from 'rxjs';
import { User } from '../modul/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule,FilmItemComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {
  favoriteFilms:film[]=[];
  currentUser!:User;
  favorites!: Observable<Favorite[]>;
  constructor(private favoriteService: FilmService, private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.currentUser=history.state.user
    })
    this.favorites=this.favoriteService.getFavorites(this.currentUser.id);
    this.favorites.subscribe((favorites: Favorite[]) => {
          const movieObservables: Observable<film>[] = favorites.map((favorite: Favorite) => {
            return this.favoriteService.getMovieById(favorite.id_film);
          });
    
          forkJoin(movieObservables).subscribe((movies: film[]) => {
            this.favoriteFilms = movies;
        });
      });

   

  }
}