import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmItemComponent} from '../film-item/film-item.component';
import {FilmService} from '../filmServices/service';
import { film } from '../modul/movie';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { User } from '../modul/client';



@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule, FilmItemComponent,HttpClientModule,SearchComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css',
  providers: [FilmService],
})

export class ListFilmComponent implements OnInit{
  currentUser!: User;
  films : film[] =[];
  filmSearch : film[] =[];

  serched!:String
  constructor(private filmService: FilmService, private route:ActivatedRoute){

  }
  handleClick($event: string) {
    alert($event)
  }

  ngOnInit() {
    this.filmService.getMovies().subscribe((data: any) => {
      this.films = data.results
      this.filmSearch = data.results})
      this.route.paramMap.subscribe(()=> {
        this.currentUser=history.state.user
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
  