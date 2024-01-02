import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { film } from '../modul/movie';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../filmServices/service';
import { ListCommantaireComponent } from '../list-commantaire/list-commantaire.component';
import { User } from '../modul/client';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [CommonModule,ListCommantaireComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent implements OnInit{
   
  movie !: film;
  movieId: number | undefined;
  currentUser!:User;


  constructor(private router : ActivatedRoute, private filmService : FilmService) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=> {
      this.currentUser=history.state.user
      this.movieId=history.state.id_movie
    })
    this.getMovieById(this.movieId);
    console.log(this.currentUser)

  }


  private getMovieById(movieId: any) {
    this.filmService.getMovieById(movieId).subscribe(
      (response: film): void =>{
        this.movie = response;
      }
    );
  }

  getImage(path: string) {
    return this.filmService.getImageUrl(path)
  }

  getStarRating(voteAverage: number): string {
    const rating = Math.round(voteAverage / 2);
    return '⭐'.repeat(rating);
  }

}