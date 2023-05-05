import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formation } from 'src/app/interfaces/interfaces';
import { CommunicatorFormationService } from 'src/app/services/formation/communicator-formation.service';


@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent {

  addForm: FormGroup;
  @Output() onAddFormation: EventEmitter<Formation> = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorFormationService){

      this.addForm = this.formBuilder.group(
        {
          title: ['', [Validators.required, Validators.minLength(3)]],
          description: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(600)]],
          logoAcademy: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
          startDate: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          endDate: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        }
      )
    }

  get Title(){
    return this.addForm.get('title');
  }

  get Description(){
    return this.addForm.get('description');
  }

  get LogoAcademy(){
    return this.addForm.get('logoAcademy');
  }

  get StartDate(){
    return this.addForm.get('startDate');
  }

  get EndDate(){
    return this.addForm.get('endDate')
  }

  addFormation(event: Event){
    event.preventDefault;
    const newFormation = this.addForm.value;
    this.communicator.onAddFormation(newFormation);
  }

  toggleAddFormation(){
    this.onAddFormation.emit();
  }

}
