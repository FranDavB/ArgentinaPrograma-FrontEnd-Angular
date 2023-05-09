import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Experiences } from 'src/app/interfaces/interfaces';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';
import { DatabaseService } from 'src/app/services/experiences/database.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ngOnInit(): void {

    this.database.getExperience().subscribe((dbexperiences) => {
      this.experiences = dbexperiences;
    });

    this.communicator.onAddExperienceObservable().subscribe((newExp)=>{
      this.addExperience(newExp);
    })

    this.communicator.onDeleteExperienceObservable().subscribe((deleteExp)=>{
      this.deleteExperience(deleteExp);
    });

    this.communicator.onEditExperienceObservable().subscribe((editExperience)=>{
      this.editExperience(editExperience);
    });
    
    AOS.init({
      duration: 1000,
      offset: 200
    });

  }
  
  constructor(
    public router: Router,
    private database: DatabaseService,
    private communicator: CommunicatorService
  ){}

  experiences: Experiences[] = []
  experienceSelected: boolean = false;

  getExperiences(){
    this.database.getExperience().subscribe((dbexperiences) => {
      this.experiences = dbexperiences;
    });
  }

  addExperience(experience: Experiences){
    this.database.addExperience(experience).subscribe((newExperience) =>
      this.experiences.push(newExperience))
  }

  deleteExperience(experience: Experiences){
    this.database.deleteExperience(experience).subscribe(() =>{
      this.experiences = this.experiences.filter (t => t.id !== experience.id);
    })
  }

  editExperience(experience: Experiences){
    this.database.editExperience(experience).subscribe(() => {
      const index = this.experiences.findIndex(f => f.id === experience.id);
      if (index !== -1) {
        this.experiences[index] = experience;
      } else {
        this.experiences.push(experience);
      }
    });
  }

  toggleExperienceSelected(){
    this.experienceSelected = true;
  }


  get canDelete(): boolean{
    return this.experiences.length >= 2;
  }
}
