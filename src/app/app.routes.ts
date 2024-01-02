import { Routes } from '@angular/router';
import { FilmItemComponent } from './film-item/film-item.component';
import {FilmDetailsComponent} from './film-details/film-details.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { SignupComponent } from './signup/signup.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
   {path:'films', component:ListFilmComponent},
   {path:'details', component:FilmDetailsComponent},
   {path:"signup",component: SignupComponent},
   {path:"", component: AuthentificationComponent},
   {path:"favorite", component:FavoriteComponent}

];
