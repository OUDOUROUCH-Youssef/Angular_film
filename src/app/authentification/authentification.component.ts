import { routes } from './../app.routes';
import { FilmService } from './../filmServices/service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { User } from '../modul/client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {
  users!:User[];
  currentUser!:User;
  userName:String="";
  password:String="";
  logIn:boolean=false;
  constructor(private filmService:FilmService,private router:Router){}

  ngOnInit(){
    this.filmService.getClient().subscribe(
      (response:User[]) =>{
        this.users=response
      }
    );
  }
  onSave(){
    this.users.forEach((user)=>{
      if(user.userName==this.userName && user.password==this.password){
        this.currentUser=user;
        this.logIn=true;
        const navigationExtras = {
          state: {
            user:this.currentUser
          }
        };
        this.router.navigate(['/films'],navigationExtras)
      }
    })
  }
}
