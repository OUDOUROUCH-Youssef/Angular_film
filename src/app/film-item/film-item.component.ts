import { film } from '../modul/movie';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmDetailsComponent} from "../film-details/film-details.component"
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule,FilmDetailsComponent,RouterModule],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
[x: string]: any;
  constructor(private router: Router){}
  @Input() film !:any;
  @Output() change : EventEmitter<string> = new EventEmitter();


  onClick(){
    this.change.emit("Clicked on movie : " + this.film?.title);
  }

}
