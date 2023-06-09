import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { PROJECT } from 'src/app/interfaces/PROJECT';
import { Project } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicatorProjectService } from 'src/app/services/project/communicator-project.service';
import { DatabaseProjectService } from 'src/app/services/project/database-project.service';


@Component({
  selector: 'app-element-project',
  templateUrl: './element-project.component.html',
  styleUrls: ['./element-project.component.css']
})
export class ElementProjectComponent implements OnInit{

  ngOnInit(): void {   
    
    this.isLoggedInSubscription = this.authServ.isLoggedIn$.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn$ = isLoggedIn;
      }
    );
    
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  constructor(
    private authServ: AuthenticationService,
    private communicator: CommunicatorProjectService
  ){}
  

  @Input() project: Project = PROJECT[0];
  @Input() canDelete: boolean = false;
  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;
  mostrarEditProject: boolean = false;

  onDeleteProject(project: Project){
    this.communicator.onDeleteProject(project);
  }

  toggleMostrarEditProject(){
    this.mostrarEditProject = !this.mostrarEditProject;
    console.log('canDelete' + this.canDelete)
  }



}
