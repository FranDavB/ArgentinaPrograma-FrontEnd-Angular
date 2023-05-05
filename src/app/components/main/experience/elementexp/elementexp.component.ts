import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/interfaces/interfaces';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Subscription } from 'rxjs';
import { faSquarePlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


import { DatabaseService } from 'src/app/services/experiences/database.service';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';

import { trigger, style, transition, animate, state } from '@angular/animations';


@Component({
  selector: 'app-elementexp',
  templateUrl: './elementexp.component.html',
  styleUrls: ['./elementexp.component.css'],

})
export class ElementexpComponent {
  
  experiences: Experiences[] = [];
  experience: Experiences = EXPERIENCE[0];
  subscription?: Subscription;
  mostrarEditExp: boolean = false;
  mostrarAddExp: boolean = false;


  id?: any;
  logourl: string ="";

  // Iconos//

  faTrash = faTrash;
  faPenToSquare= faPenToSquare;
  faSquarePlus= faSquarePlus;

  constructor(
    private database: DatabaseService, 
    private route: ActivatedRoute, 
    private router: Router,
    private communicator: CommunicatorService ){
      
    this.route.params.subscribe( (params) => {
        const idParam = params['id'];

        this.database.getExperience().subscribe((dbExperiences) => {
          this.experiences = dbExperiences;

          const protoExp = this.experiences.find(element  => element.id == idParam);

          if(protoExp?.id){
            this.experience = protoExp;
            this.id = protoExp.id;
            console.log('This id ' + this.id)
          } else {}
        });


    })

  }

  onDeleteExp(experience: Experiences){
    this.communicator.onDeleteExperience(experience);
  }

  toggleEditExp(){
    this.mostrarEditExp = !this.mostrarEditExp;
  }

  toggleMostrarAddExp(){
    this.mostrarAddExp = !this.mostrarAddExp
  }



}
