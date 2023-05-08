import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Skill } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorSkillService {

  constructor() { }

  private deleteSubjectSkill = new Subject<Skill>;
  private editSubjectSkill = new Subject<Skill>;
  private newSubjectSkill = new Subject<Skill>;

  onDeleteSkill(Skill: Skill){    
    this.deleteSubjectSkill.next(Skill);
  }

  onDeleteSkilleObservable():Observable<any> {
   return this.deleteSubjectSkill.asObservable();
 }

  onEditSkill(Skill: Skill){
      this.editSubjectSkill.next(Skill);
  }

  onEditSkillObservable():Observable<any> {
    return this.editSubjectSkill.asObservable();
  }


  onAddSkill(experience: Skill){    
    this.newSubjectSkill.next(experience);
  }

  onAddSkillObservable():Observable<any> {
    return this.newSubjectSkill.asObservable();
  }
}

