
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Experiences } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private deleteSubjectExperience = new Subject<Experiences>;
  private editSubjectExperience = new Subject<Experiences>;
  private newSubjectExperience = new Subject<Experiences>;


  onDeleteExperience(experience: Experiences){    
     this.deleteSubjectExperience.next(experience);
  }

  onDeleteExperienceObservable():Observable<any> {
    return this.deleteSubjectExperience.asObservable();
  }

  onEditExperience(experience: Experiences){
     this.editSubjectExperience.next(experience);
  }

  onEditExperienceObservable():Observable<any> {
    return this.editSubjectExperience.asObservable();
  }

  onAddExperience(experience: Experiences){    
    this.newSubjectExperience.next(experience);
 }

  onAddExperienceObservable():Observable<any> {
   return this.newSubjectExperience.asObservable();
 }

}
