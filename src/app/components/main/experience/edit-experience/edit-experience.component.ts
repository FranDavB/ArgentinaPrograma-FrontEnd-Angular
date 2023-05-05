import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Experiences } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})

export class EditExperienceComponent {
  @Input() experience: Experiences = EXPERIENCE[0];
  @Output() toggleEditExpEventEmitter: EventEmitter<any> = new EventEmitter();

  editForm: FormGroup;


  constructor(
    private communicator: CommunicatorService,
    private formBuilder: FormBuilder){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          name: ['', [Validators.required, Validators.minLength(3)]],
          logourl: ['', [Validators.required, Validators.maxLength(1000)]],
          description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
          date: ['', [Validators.required, Validators.pattern(/[A-Za-z]+\s[0-9]+\s-\s([A-Za-z]+\s[0-9]|[[A-Za-z])/)]]
        }
      )
    }

  onEditExp(event: Event){
    const editId = this.experience.id;
    this.editForm.patchValue({
      id: this.experience.id
    })
    const editExp = this.editForm.value;
    this.communicator.onEditExperience(editExp);
  }

  toggleEditExp(){
    this.toggleEditExpEventEmitter.emit();
  }

  get Name(){
    return this.editForm.get("name");
  }

  get Logourl(){
    return this.editForm.get("logourl");
  }

  get Description(){
    return this.editForm.get("description");
  }

  get Date(){
    return this.editForm.get("date");
  }

  get Id(){
    return this.editForm.get("id");
  }
}
