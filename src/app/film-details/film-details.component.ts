import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { film } from '../modul/movie';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../filmServices/service';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent implements OnInit{
   
  movie: any;
  movieId: number | undefined;

  constructor(private router : ActivatedRoute, private filmService : FilmService) {
  }

  ngOnInit(): void {
    // Get the ID from the URL
    const movieId = this.router.snapshot.params['id']
    // Use the ID to fetch the movie details
    this.getMovieById(movieId);
    
  }


  private getMovieById(movieId: any) {
    this.filmService.getMovieById(movieId).subscribe(
      (response: any): void =>{
        this.movie = response;
      }
    );
  }

  getImage(path: string) {
    return this.filmService.getImageUrl(path)
  }

  getStarRating(voteAverage: number): string {
    // Implement logic to convert vote average to star rating format
    const rating = Math.round(voteAverage / 2); // Assuming a 10-point scale
    return '⭐'.repeat(rating);
  }

}