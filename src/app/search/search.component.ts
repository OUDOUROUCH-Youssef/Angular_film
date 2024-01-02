import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { User } from '../modul/client';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() change : EventEmitter<string> = new EventEmitter();
  @Input() currentUser!:User;
  searchTerm: string='';
  constructor(private router:Router){}

  search(searchTerm: string,page:number) {
    this.searchTerm = searchTerm.toLowerCase();
  }
  showFavorite() {
    const navigationExtras = {
      state: {
        user:this.currentUser
      }
    };
    this.router.navigate(['/favorite'],navigationExtras)
  }
  sendTerm(){
    this.change.emit(this.searchTerm)
  }
  
}
