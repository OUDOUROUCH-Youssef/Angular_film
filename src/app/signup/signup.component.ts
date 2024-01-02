import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FilmService } from '../filmServices/service';
import { User } from '../modul/client';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userName:String="";
  password:String="";
  password1:String="";

  constructor(private filmService:FilmService){}

  onSave(){
    this.filmService.postClient({userName:this.userName,password:this.password} as User).subscribe()
    
  }
  
}
