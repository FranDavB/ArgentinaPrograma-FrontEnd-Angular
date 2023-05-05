import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { FORMATION } from 'src/app/interfaces/FORMATION';
import { Formation } from 'src/app/interfaces/interfaces';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';
import { DatabaseFormationService } from 'src/app/services/formation/database-formation.service';


@Component({
  selector: 'app-element-formation',
  templateUrl: './element-formation.component.html',
  styleUrls: ['./element-formation.component.css']
})
export class ElementFormationComponent implements OnInit{

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  constructor(
    private database: DatabaseFormationService, 
    private route: ActivatedRoute, 
    private communicator: CommunicatorFormationService
  ){
    this.route.params.subscribe( (params) => {

      const idParam = params['id'];
      this.database.getFormation().subscribe((dbFormation) => {
        const protoFormation = dbFormation.find(element  => element.id == idParam);

        if(protoFormation?.id){
          this.formation = protoFormation;
          //this.id -> por si las
        } 

        if(dbFormation.length == 1){
          this.canDelete = false;
        }
      });
    })
  }

  formation: Formation = FORMATION[0];
  subscription?: Subscription;
  mostrarEditFormation: boolean = false;
  mostrarAddFormation: boolean = false;
  canDelete: boolean = true; 

  onDeleteFormation(formation: Formation){
    this.communicator.onDeleteFormation(formation);
  }

  toggleMostrarEditFormation(){
    this.mostrarEditFormation = !this.mostrarEditFormation;
  }

  toggleMostrarAddFormation(){
    this.mostrarAddFormation = !this.mostrarAddFormation
  }

}
