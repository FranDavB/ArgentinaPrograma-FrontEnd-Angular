import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Experiences } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})

export class EditExperienceComponent implements OnInit{

  @Input() experience: Experiences = EXPERIENCE[0];
  @Output() toggleEditExpEventEmitter: EventEmitter<any> = new EventEmitter();

  editForm: FormGroup;


  constructor(
    private communicator: CommunicatorService,
    private formBuilder: FormBuilder){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          name: ['', [Validators.required, Validators.minLength(2)]],
          logourl: ['', [Validators.required, Validators.maxLength(1000)]],
          description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
          startDate: ['', [Validators.required, Validators.pattern(/([A-Za-z]+\s[0-9]+)|(Actualidad)/)]],
          endDate: ['', [Validators.required, Validators.pattern(/([A-Za-z]+\s[0-9]+)|(Actualidad)/)]]

        }
      )
    }

    ngOnInit(): void {
      this.editForm.patchValue(this.experience);
    }


  onEditExp(event: Event){
    event.preventDefault;
    this.editForm.patchValue({
      id: this.experience.id
    })
    const editExp = this.editForm.value;
    this.communicator.onEditExperience(editExp);
  }

  toggleEditExperience(){
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

  get StartDate(){
    return this.editForm.get("startDate");
  }

  get EndDate(){
    return this.editForm.get("endDate");
  }


  get Id(){
    return this.editForm.get("id");
  }
}
