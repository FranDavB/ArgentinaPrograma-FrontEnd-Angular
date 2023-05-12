import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Experiences } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';
import { DatabaseService } from 'src/app/services/experiences/database.service';



@Component({
  selector: 'app-element-experience',
  templateUrl: './element-experience.component.html',
  styleUrls: ['./element-experience.component.css']
})
export class ElementExperienceComponent implements OnInit{

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
  }

  constructor(
    private authServ: AuthenticationService,
    private communicator: CommunicatorService
  ){}

  @Input() experience: Experiences = EXPERIENCE[0];
  @Input() experiences: Experiences[] = [];
  @Input() canDelete: boolean = false;


  mostrarEditExperience: boolean = false;
  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;
  

  onDeleteExperience(experience: Experiences){
    this.communicator.onDeleteExperience(experience);
  }

  toggleMostrarEditExperience(){
    this.mostrarEditExperience = !this.mostrarEditExperience;
  }


}
