import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  ){}

  @Input() formation: Formation = FORMATION[0];
  @Input() formations: Formation[] = [];
  @Input() canDelete: boolean = false;


  subscription?: Subscription;
  mostrarEditFormation: boolean = false;
  mostrarAddFormation: boolean = false;

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
