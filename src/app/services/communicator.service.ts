// Communicator para componentes que usen el RouterOutlet y no pueden comunicarse con su "parental"//

import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { Experiences } from '../interfaces/experiences';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private subjectNumber = new Subject<number>;
  private subjectExperience = new Subject<Experiences>;

  constructor() { }    

  // Eliminar una Experiencia//

  onDeleteExperience(idExp: number){    
     this.subjectNumber.next(idExp);
  }

  onDeleteExperienceObservable():Observable<any> {
    return this.subjectNumber.asObservable();
  }

  // Editar una Experiencia//

  onEditExperience(experience: Experiences){
     this.subjectExperience.next(experience);
  }

  onEditExperienceObservable():Observable<any> {
    return this.subjectExperience.asObservable();
  }

}
