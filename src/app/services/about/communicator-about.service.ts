import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { About, } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorAboutService {

  constructor() { }

  private editSubjectAbout = new Subject<About>;

  onEditAbout(about: About){
    this.editSubjectAbout.next(about);
  }

  OnEditAboutObservable():Observable<any> {
    return this.editSubjectAbout.asObservable();
  }
}
