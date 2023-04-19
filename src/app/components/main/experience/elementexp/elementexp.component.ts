import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/interfaces/experiences';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Subscription } from 'rxjs';
import { faSquarePlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


import { DatabaseService } from 'src/app/services/database.service';
import { CommunicatorService } from 'src/app/services/communicator.service';


@Component({
  selector: 'app-elementexp',
  templateUrl: './elementexp.component.html',
  styleUrls: ['./elementexp.component.css']
})
export class ElementexpComponent {
  
  experiences: Experiences[] = [];
  experience: Experiences = EXPERIENCE[0];
  subscription?: Subscription;
  mostrarEditExp: boolean = false;

  id?: any;
  logourl: string ="";

  // Iconos//

  faTrash = faTrash;
  faPenToSquare= faPenToSquare;

  constructor(
    private database: DatabaseService, 
    private route: ActivatedRoute, 
    private router: Router,
    private communicator: CommunicatorService ){
      
    this.route.params.subscribe( (data) => {
        this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
        this.database.getExperience().subscribe((dbexperiences) => {
          this.experiences = dbexperiences;
          console.log(this.experiences);
          this.experience = this.experiences[this.id - 1];
          console.log(this.experience);
        });
    })

  }

  onDeleteExp(id: number){
    this.communicator.onDeleteExperience(id);
  }

  toggleEditExp(){
    this.mostrarEditExp = !this.mostrarEditExp;
  }
}
