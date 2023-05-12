import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { FORMATION } from 'src/app/interfaces/FORMATION';
import { Formation } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';
import { DatabaseFormationService } from 'src/app/services/formation/database-formation.service';


@Component({
  selector: 'app-element-formation',
  templateUrl: './element-formation.component.html',
  styleUrls: ['./element-formation.component.css']
})
export class ElementFormationComponent implements OnInit{

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
    private communicator: CommunicatorFormationService
  ){}

  @Input() formation: Formation = FORMATION[0];
  @Input() canDelete: boolean = false;
  isLoggedIn$: boolean = false;
  isLoggedInSubscription?: Subscription;
  mostrarEditFormation: boolean = false;
  

  onDeleteFormation(formation: Formation){
    this.communicator.onDeleteFormation(formation);
  }

  toggleMostrarEditFormation(){
    this.mostrarEditFormation = !this.mostrarEditFormation;
  }



}
