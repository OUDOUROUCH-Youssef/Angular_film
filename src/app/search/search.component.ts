import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() change : EventEmitter<string> = new EventEmitter();
  searchTerm: string='';

  search(searchTerm: string,page:number) {
    this.searchTerm = searchTerm.toLowerCase();
  }
  ngOnInit(): void {
    
  }
  sendTerm(){
    this.change.emit(this.searchTerm)
  }
  
}
