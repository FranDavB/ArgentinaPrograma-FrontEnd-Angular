// Communicator para componentes que usen el RouterOutlet y no pueden comunicarse con su "parental"//

import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { Experiences } from '../interfaces/experiences';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private deleteSubjectExperience = new Subject<Experiences>;
  private editSubjectExperience = new Subject<Experiences>;
  private newSubjectExperience = new Subject<Experiences>;




  constructor() { }    

  // Eliminar una Experiencia//

  onDeleteExperience(experience: Experiences){    
     this.deleteSubjectExperience.next(experience);
  }

  onDeleteExperienceObservable():Observable<any> {
    return this.deleteSubjectExperience.asObservable();
  }

  // Editar una Experiencia//

  onEditExperience(experience: Experiences){
     this.editSubjectExperience.next(experience);
  }

  onEditExperienceObservable():Observable<any> {
    return this.editSubjectExperience.asObservable();
  }

  // Agregar una Experiencia//

  onAddExperience(experience: Experiences){    
    this.newSubjectExperience.next(experience);
 }

  onAddExperienceObservable():Observable<any> {
   return this.newSubjectExperience.asObservable();
 }

}
