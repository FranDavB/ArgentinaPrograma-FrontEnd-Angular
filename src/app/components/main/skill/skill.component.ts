import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/interfaces/interfaces';
import { CommunicatorSkillService } from 'src/app/services/skill/communicator-skill.service';
import { DatabaseSkillService } from 'src/app/services/skill/database-skill.service';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{

  ngOnInit(): void {

    this.isLoggedInSubscription = this.authServ.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn$ = isLoggedIn;
      }
    );
      

    this.database.getSkill().subscribe((dbskills) => {
      this.skills = dbskills;
    });

    this.communicator.onAddSkillObservable().subscribe((newProj)=>{
      this.addSkill(newProj);
    })

    this.communicator.onDeleteSkilleObservable().subscribe((deleteProj)=>{
      this.deleteSkill(deleteProj);
    });

    this.communicator.onEditSkillObservable().subscribe((editSkill)=>{
      this.editSkill(editSkill);
    });
    
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  constructor(
    public authServ: AuthenticationService,
    public router: Router,
    private database: DatabaseSkillService,
    private communicator: CommunicatorSkillService
  ){}

  skills: Skill[] = []
  skillSelected: boolean = false;
  mostrarAddSkill: boolean = false;
  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;


  getSkills(){
    this.database.getSkill().subscribe((dbskills) => {
      this.skills = dbskills;
    });
  }

  addSkill(skill: Skill){
    this.database.addSkill(skill).subscribe((newSkill) =>
      this.skills.push(newSkill),
    )
  }

  deleteSkill(skill: Skill){
    this.database.deleteSkill(skill).subscribe(() =>{
      this.skills = this.skills.filter (t => t.id !== skill.id);
    })
  }

  editSkill(skill: Skill){
    this.database.editSkill(skill).subscribe(() => {
      const index = this.skills.findIndex(f => f.id === skill.id);
      if (index !== -1) {
        this.skills[index] = skill;
      } else {
        this.skills.push(skill);
      }
    });
  }

  toggleSkillSelected(){
    this.skillSelected = true;
  }

  toggleMostrarAddSkill(){
    this.mostrarAddSkill = !this.mostrarAddSkill;
  }

  get canDelete(): boolean{
    return this.skills.length >= 2;
  }

}
