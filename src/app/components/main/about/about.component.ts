import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { ABOUT } from 'src/app/interfaces/ABOUT';
import { About } from 'src/app/interfaces/interfaces';
import { CommunicatorAboutService } from 'src/app/services/about/communicator-about.service';
import { DatabaseAboutService } from 'src/app/services/about/database-about.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  mostrarEditAbout: boolean = false;
  about: About = ABOUT[0];
  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;
  
  ngOnInit(): void {

    this.isLoggedInSubscription = this.authServ.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn$ = isLoggedIn;
      }
    );
    
    AOS.init({
      duration: 1000,
      offset: 200
    });

    this.getAbout();
  }

  constructor(
    private authServ: AuthenticationService,
    private communicator: CommunicatorAboutService,
    private database: DatabaseAboutService
  ){
    this.communicatorEditExperience();
  }

  communicatorEditExperience(){
    this.communicator.OnEditAboutObservable().subscribe((editExperience)=>{
      this.editAbout(editExperience)
  })
  }

  editAbout(about: About){
      this.database.editAbout(about).subscribe( aboutEdit => {
        this.about = aboutEdit; 
      })
  }

  toggleEditAbout(){
    this.mostrarEditAbout = !this.mostrarEditAbout
  }

  getAbout(){
    this.database.getAbout().subscribe((dbAbout) => {
      const getAbout = dbAbout.find(item => item.id === 1);
      if (getAbout != null){
        this.about = getAbout;
        console.log(this.about);
      }
      
    });
  }

}
