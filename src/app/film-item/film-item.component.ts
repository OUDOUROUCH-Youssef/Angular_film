import { film } from '../modul/movie';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmDetailsComponent} from "../film-details/film-details.component"
import { Router, RouterModule } from '@angular/router';
import { FilmService } from '../filmServices/service';
import { Favorite } from '../modul/favorite';
import { User } from '../modul/client';


@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule,FilmDetailsComponent,RouterModule],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent{
  @Input() film !:film;
  @Input() currentUser!:User;
  @Input() favoriteFilms: film[] = [];
  @Output() change : EventEmitter<number> = new EventEmitter();
  
  iconColor: string = 'gray';
  constructor(private favoriteService: FilmService,private router:Router) {}

  toggleColor(idFilm:number) {
    if (this.iconColor === 'gray'){
      this.iconColor ='red'
    }else{
       this.iconColor='gray';
    }
    this.favoriteService.postFavorite({id_film: idFilm,id_user:this.currentUser.id} as Favorite).subscribe()
    
  }
  showDetails(id:number) {
    const navigationExtras = {
      state: {
        user:this.currentUser,
        id_movie:id
      }
    };
    this.router.navigate(['/details'],navigationExtras)
  }
}
