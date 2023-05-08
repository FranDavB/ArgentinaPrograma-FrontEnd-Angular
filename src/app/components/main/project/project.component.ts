import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Project } from 'src/app/interfaces/interfaces';
import { CommunicatorProjectService } from 'src/app/services/project/communicator-project.service';
import { DatabaseProjectService } from 'src/app/services/project/database-project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ngOnInit(): void {

    this.database.getProject().subscribe((dbprojects) => {
      this.projects = dbprojects;
    });

    this.communicator.onAddProjectObservable().subscribe((newProj)=>{
      this.addProject(newProj);
    })

    this.communicator.onDeleteProjecteObservable().subscribe((deleteProj)=>{
      this.deleteProject(deleteProj);
    });

    this.communicator.onEditProjectObservable().subscribe((editProject)=>{
      this.editProject(editProject);
    });
    
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  constructor(
    public router: Router,
    private database: DatabaseProjectService,
    private communicator: CommunicatorProjectService
  ){}


  projects: Project[] = []
  projectSelected: boolean = false;

  getProjects(){
    this.database.getProject().subscribe((dbprojects) => {
      this.projects = dbprojects;
    });
  }

  addProject(project: Project){
    this.database.addProject(project).subscribe((newProject) =>
      this.projects.push(newProject),
    )
  }

  deleteProject(project: Project){
    this.database.deleteProject(project).subscribe(() =>{
      this.projects = this.projects.filter (t => t.id !== project.id);
    })
  }

  editProject(project: Project){
    this.database.editProject(project).subscribe(() => {
      const index = this.projects.findIndex(f => f.id === project.id);
      if (index !== -1) {
        this.projects[index] = project;
      } else {
        this.projects.push(project);
      }
    });
  }

  toggleProjectSelected(){
    this.projectSelected = true;
  }

  get canDelete(): boolean{
    return this.projects.length >= 2;
  }
}
