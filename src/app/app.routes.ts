import { Routes } from '@angular/router';
import { FilmItemComponent } from './film-item/film-item.component';
import {FilmDetailsComponent} from './film-details/film-details.component';
import { ListFilmComponent } from './list-film/list-film.component';

export const routes: Routes = [
   {path:"", component:ListFilmComponent},
   {path:'details/:id', component:FilmDetailsComponent}
];
