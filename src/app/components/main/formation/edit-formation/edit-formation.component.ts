import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FORMATION } from 'src/app/interfaces/FORMATION';
import { Formation } from 'src/app/interfaces/interfaces';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';


@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent {
  editForm: FormGroup;
  @Input() formation: Formation = FORMATION[0];
  @Output() toggleEditFormationEventEmitter: EventEmitter<Formation> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorFormationService,
    private router: Router){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          title: ['', [Validators.required, Validators.minLength(3)]],
          description: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(600)]],
          logoAcademy: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
          startDate: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          endDate: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        }
      )
  }

  onEditFormation(event: Event){
    event.preventDefault;
    this.editForm.patchValue({
      id: this.formation.id
    })
    const editFormation = this.editForm.value;
    this.communicator.onEditFormation(editFormation);
  }

  toggleMostrarEditFormation(){
    this.toggleEditFormationEventEmitter.emit();
  }

  get Title(){
    return this.editForm.get('title');
  }

  get Description(){
    return this.editForm.get('description');
  }

  get LogoAcademy(){
    return this.editForm.get('logoAcademy');
  }

  get StartDate(){
    return this.editForm.get('startDate');
  }

  get EndDate(){
    return this.editForm.get('endDate')
  }
}
