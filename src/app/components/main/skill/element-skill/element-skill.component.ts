import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { SKILL } from 'src/app/interfaces/SKILL';
import { Skill } from 'src/app/interfaces/interfaces';
import { CommunicatorSkillService } from 'src/app/services/skill/communicator-skill.service';
import { DatabaseSkillService } from 'src/app/services/skill/database-skill.service';


@Component({
  selector: 'app-element-skill',
  templateUrl: './element-skill.component.html',
  styleUrls: ['./element-skill.component.css']
})
export class ElementSkillComponent implements OnInit{

  ngOnInit(): void {    
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  constructor(
    private database: DatabaseSkillService, 
    private route: ActivatedRoute, 
    private communicator: CommunicatorSkillService
  ){}
  

  @Input() skill: Skill = SKILL[0];
  @Input() canDelete: boolean = false;
  subscription?: Subscription;
  mostrarEditSkill: boolean = false;
  mostrarAddSkill: boolean = false;

  onDeleteSkill(skill: Skill){
    this.communicator.onDeleteSkill(skill);
  }

  toggleMostrarEditSkill(){
    this.mostrarEditSkill = !this.mostrarEditSkill;
    console.log('canDelete' + this.canDelete)
  }

  toggleMostrarAddSkill(){
    this.mostrarAddSkill = !this.mostrarAddSkill;
  }

}
