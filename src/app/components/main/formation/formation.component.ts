import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { Formation } from 'src/app/interfaces/interfaces';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';
import { DatabaseFormationService } from 'src/app/services/formation/database-formation.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  ngOnInit(): void {

    this.database.getFormation().subscribe((dbformations) => {
      this.formations = dbformations;
      this.checkFormationSelected();
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
  ){
    
  }


  formations: Formation[] = []
  formationSelected: boolean = false;

  onSelect(formation: any){
    this.router.navigate(['/portfolio/formación', formation.id]).then(() => {
      this.formationSelected = true;
    });
  }

  checkFormationSelected() {
    const url = this.router.url;
    if (url.includes('/formación/')) {
      this.formationSelected = true;
    } else {
      this.formationSelected = false;
    }
  }

  getFormations(){
    this.database.getFormation().subscribe((dbformations) => {
      this.formations = dbformations;
    });
  }

  addFormation(formation: Formation){
    this.database.addFormation(formation).subscribe((newFormation) =>
      this.formations.push(newFormation),
    )
    this.router.navigate(["/portfolio"]);
  }

  deleteFormation(formation: Formation){
    this.database.deleteFormation(formation).subscribe(() =>{
      this.formations = this.formations.filter (t => t.id !== formation.id);
    })
    this.router.navigate(["/portfolio"]);
  }

  editFormation(formation: Formation){
    this.database.editFormation(formation).pipe(
      switchMap(() => this.router.navigate(['portfolio/formación/', formation.id]))
      ).subscribe();
  }

}
