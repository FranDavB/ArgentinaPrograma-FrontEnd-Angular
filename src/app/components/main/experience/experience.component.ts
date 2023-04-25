import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Experiences } from 'src/app/interfaces/experiences';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { faSquarePlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { DatabaseService } from 'src/app/services/database.service';
import { CommunicatorService } from 'src/app/services/communicator.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
  active: boolean = false;
  subscription?: Subscription;
  experiences: Experiences[] = [];
  faSquarePlus = faSquarePlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  id?: number;
  idExpDelete: number = 1;

  experience?: Experiences;

  constructor(
      private database: DatabaseService,
      private communicator: CommunicatorService,
      private router: Router,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef){
        
      this.communicatorDeleteExperience();

      this.communicatorEditExperience();

      this.communicatorAddExperience();
      
      }

  ngOnInit(): void {

    this.getExperience();

  }

  // CommunicatorService //

  communicatorDeleteExperience(){
    this.communicator.onDeleteExperienceObservable().subscribe((deleteExp)=>{
      this.deleteExperience(deleteExp);
    });
  }

  communicatorEditExperience(){
    this.communicator.onEditExperienceObservable().subscribe((editExperience)=>{
      this.editExperience(editExperience)
  })
  }

  communicatorAddExperience(){
    this.communicator.onAddExperienceObservable().subscribe((newExp)=>{
      this.addExperience(newExp);
  })
  }

  // Router //

  onSelect(experience: any){
    this.router.navigate(['/portfolio/experiencia', experience.id])
  }

  // Database //

  getExperience(){
    this.database.getExperience().subscribe((dbexperiences) => {
      this.experiences = dbexperiences;
      console.log(this.experiences);
    });
  }

  addExperience(experiencia: Experiences){

    this.database.addExperience(experiencia).subscribe((experience) =>
      this.experiences.push(experience),
    )

    const indx = this.experiences.find(element => element.id == experiencia.id);
    this.router.navigate(["/portfolio"]);

  }

  deleteExperience(experience: Experiences){

    this.database.deleteExperience(experience).subscribe(() =>{
      this.experiences = this.experiences.filter (t => t.id !== experience.id);
    })

    this.router.navigate(["/portfolio"]);
  }

  editExperience(experience: Experiences){
    this.database.editExperience(experience).subscribe( expEdited => {
      this.experience = expEdited; 
      this.router.navigate(["/portfolio", expEdited.id]);
    })
  }

}
