import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { Formation } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorFormationService {

  constructor() { }

  private deleteSubjectFormation = new Subject<Formation>;
  private editSubjectFormation = new Subject<Formation>;
  private newSubjectFormation = new Subject<Formation>;

  onDeleteFormation(formation: Formation){    
    this.deleteSubjectFormation.next(formation);
  }

  onDeleteFormationeObservable():Observable<any> {
   return this.deleteSubjectFormation.asObservable();
 }

  onEditFormation(formation: Formation){
      this.editSubjectFormation.next(formation);
  }

  onEditFormationObservable():Observable<any> {
    return this.editSubjectFormation.asObservable();
  }


  onAddFormation(experience: Formation){    
    this.newSubjectFormation.next(experience);
  }

  onAddFormationObservable():Observable<any> {
    return this.newSubjectFormation.asObservable();
  }
}
