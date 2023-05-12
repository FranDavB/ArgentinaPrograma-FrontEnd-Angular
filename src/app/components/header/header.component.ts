import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatabaseAboutService } from 'src/app/services/about/database-about.service';
import { ABOUT } from 'src/app/interfaces/ABOUT';
import { About } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private database: DatabaseAboutService,
    private authServ: AuthenticationService, 
    private router: Router) {
  }

  ngOnInit(): void {

    this.isLoggedInSubscription = this.authServ.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn$ = isLoggedIn;
      }
    );

    this.database.getAbout().subscribe((dbAbout) => {
      const getAbout = dbAbout.find(item => item.id === 1);
      if (getAbout != null){
        this.about = getAbout;
      }
      
    });

    AOS.init({
      duration: 1000,
      offset: 200
    });
  }


  navegar(idDestino: string){
    const elementoDestino = document.querySelector(idDestino);
    if (elementoDestino) {
      elementoDestino.scrollIntoView({ behavior: 'smooth' });
    } 
  }

  logOut(){
    this.authServ.logout()
  }

  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;
  about: About = ABOUT[0];


}
