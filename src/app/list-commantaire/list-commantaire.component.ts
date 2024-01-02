import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../filmServices/service';
import { Commantaire } from '../modul/comment';
import { Observable } from 'rxjs';
import { User } from '../modul/client';

@Component({
  selector: 'app-list-commantaire',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-commantaire.component.html',
  styleUrl: './list-commantaire.component.css'
})
export class ListCommantaireComponent implements OnInit{
  @Input() id_film !:number;
  @Input() currentUser!:User;

  comment: string = '';
  comment2!:Commantaire;
  comments!: Observable<Commantaire[]>;
  constructor(private favoriteService: FilmService) {}

  setValue(comment1: string) {
    if(comment1.length>0){
      this.favoriteService.postComment({id_film:this.id_film,id_user:this.currentUser.id, caption:comment1,createdAT:this.getCurrentDate(),userName:this.currentUser.userName} as Commantaire).subscribe()
      this.comments=this.favoriteService.getComment(this.id_film);
    }
    
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    const time = currentDate.getHours() + ":" + currentDate.getMinutes();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = day + "-" + month + "-" + year;
    return time + "  " + formattedDate;
  }
  

  ngOnInit() {
    this.comments=this.favoriteService.getComment(this.id_film);
  }
  
}

