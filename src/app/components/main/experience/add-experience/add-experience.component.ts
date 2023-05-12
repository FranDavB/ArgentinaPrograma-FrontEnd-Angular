import { Component, Output, EventEmitter } from '@angular/core';
import { Experiences } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  
  addForm: FormGroup;


  @Output() onAddExperience: EventEmitter<Experiences> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private communicator: CommunicatorService ){

      this.addForm = this.formBuilder.group(
        {
          name: ['', [Validators.required]],
          logourl: ['', [Validators.required, Validators.maxLength(1000)]],
          description: ['', [Validators.required, Validators.maxLength(500)]],
          startDate: ['', [Validators.required, Validators.pattern(/([A-Za-z]+\s[0-9]+)|(Actualidad)/)]],
          endDate: ['', [Validators.required, Validators.pattern(/([A-Za-z]+\s[0-9]+)|(Actualidad)/)]]

        }
      )

  }

  addExperience(event: Event){

    event.preventDefault;
    const newExperience = this.addForm.value;
    this.communicator.onAddExperience(newExperience);
  }

  toggleAddExperience(){
    this.onAddExperience.emit();
  }

  get Name(){
    return this.addForm.get("name");
  }

  get Logourl(){
    return this.addForm.get("logourl");
  }

  get Description(){
    return this.addForm.get("description");
  }

  get StartDate(){
    return this.addForm.get("startDate");
  }

  get EndDate(){
    return this.addForm.get("endDate");
  }



  
}
