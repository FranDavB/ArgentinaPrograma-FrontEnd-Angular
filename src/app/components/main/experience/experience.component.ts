import { Component, OnInit } from '@angular/core';
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
  mostrarAddExp: boolean = false;
  id?: number;
  idExpDelete: number = 1;

  experience?: Experiences;

  constructor(
      private database: DatabaseService,
      private communicator: CommunicatorService,
      private router: Router,
      private route: ActivatedRoute){}

  ngOnInit(): void {

    // GET EXPERIENCES//
    this.database.getExperience().subscribe((dbexperiences) => {
      this.experiences = dbexperiences;
      console.log(this.experiences);
    });

    // DELETE EXPERIENCE//
    this.communicator.onDeleteExperienceObservable().subscribe((idExp)=>{
      this.idExpDelete = parseInt(idExp);
      console.log(this.idExpDelete);
      this.experience = this.experiences[this.idExpDelete - 1];
      console.log(this.experience);
      this.deleteExperience(this.experience);

    })

    // EDIT EXPERIENCE//
    this.communicator.onEditExperienceObservable().subscribe((editExperience)=>{
      console.log("Hasta aca todo bien");
      this.editExperience(editExperience);
    })

  }

  isActive(a: number){
    return this.active = !this.active;
  }

  // Router //
  onSelect(experience: any){
    this.router.navigate(['/principal/experiencia', experience.id])
  }

  toggleMostrarAddExp(){
    this.mostrarAddExp = !this.mostrarAddExp
  }

  // Database //

  addExperience(experiencia: Experiences){
    console.log(experiencia);
    this.database.addExperience(experiencia).subscribe((experience) =>
      this.experiences.push(experience));
  }

  deleteExperience(experience: Experiences){
    this.database.deleteExperience(experience).subscribe(() =>{
      this.experiences = this.experiences.filter (t => t.id !== experience.id)
    })
    this.router.navigate(["/principal/experiencia/", this.idExpDelete - 1]);
  }

  editExperience(experience: Experiences){
    this.database.editExperience(experience).subscribe();
  }

}
