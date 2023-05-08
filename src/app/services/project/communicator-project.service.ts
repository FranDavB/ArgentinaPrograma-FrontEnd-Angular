import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorProjectService {

  constructor() { }

  private deleteSubjectProject = new Subject<Project>;
  private editSubjectProject = new Subject<Project>;
  private newSubjectProject = new Subject<Project>;

  onDeleteProject(Project: Project){    
    this.deleteSubjectProject.next(Project);
  }

  onDeleteProjecteObservable():Observable<any> {
   return this.deleteSubjectProject.asObservable();
 }

  onEditProject(Project: Project){
      this.editSubjectProject.next(Project);
  }

  onEditProjectObservable():Observable<any> {
    return this.editSubjectProject.asObservable();
  }


  onAddProject(experience: Project){    
    this.newSubjectProject.next(experience);
  }

  onAddProjectObservable():Observable<any> {
    return this.newSubjectProject.asObservable();
  }
}

