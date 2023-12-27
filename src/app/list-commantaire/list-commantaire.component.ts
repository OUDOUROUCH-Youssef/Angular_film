import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-commantaire',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-commantaire.component.html',
  styleUrl: './list-commantaire.component.css'
})
export class ListCommantaireComponent implements OnInit{
  comment: string = '';
  comments: string[] = [];

  setValue(comment1: string) {
    this.comment = comment1;
    this.comments.push(this.comment);
  }

  ngOnInit() {
    this.setValue(this.comment);
  }
  
}

