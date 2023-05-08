import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { Formation } from 'src/app/interfaces/interfaces';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';
import { DatabaseFormationService } from 'src/app/services/formation/database-formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  ngOnInit(): void {

    this.database.getFormation().subscribe((dbformations) => {
      this.formations = dbformations;
    });

    this.communicator.onAddFormationObservable().subscribe((newExp)=>{
      this.addFormation(newExp);
    })

    this.communicator.onDeleteFormationeObservable().subscribe((deleteExp)=>{
      this.deleteFormation(deleteExp);
    });

    this.communicator.onEditFormationObservable().subscribe((editFormation)=>{
      this.editFormation(editFormation);
    });
    
    AOS.init({
      duration: 1000,
      offset: 200
    });

  }
  
  constructor(
    public router: Router,
    private database: DatabaseFormationService,
    private communicator: CommunicatorFormationService
  ){}

  formations: Formation[] = []
  formationSelected: boolean = false;

  getFormations(){
    this.database.getFormation().subscribe((dbformations) => {
      this.formations = dbformations;
    });
  }

  addFormation(formation: Formation){
    this.database.addFormation(formation).subscribe((newFormation) =>
      this.formations.push(newFormation))
  }

  deleteFormation(formation: Formation){
    this.database.deleteFormation(formation).subscribe(() =>{
      this.formations = this.formations.filter (t => t.id !== formation.id);
    })
  }

  editFormation(formation: Formation){
    this.database.editFormation(formation).subscribe(() => {
      const index = this.formations.findIndex(f => f.id === formation.id);
      if (index !== -1) {
        this.formations[index] = formation;
      } else {
        this.formations.push(formation);
      }
    });
  }

  toggleFormationSelected(){
    this.formationSelected = true;
  }


  get canDelete(): boolean{
    return this.formations.length >= 2;
  }
}
