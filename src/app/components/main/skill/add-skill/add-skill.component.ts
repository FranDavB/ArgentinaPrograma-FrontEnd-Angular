import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skill } from 'src/app/interfaces/interfaces';
import { CommunicatorSkillService } from 'src/app/services/skill/communicator-skill.service';


@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  addForm: FormGroup;
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorSkillService){

      this.addForm = this.formBuilder.group(
        {
          id: [''],
          title: ['', [Validators.required]],
          percentage: ['', [Validators.required,  Validators.pattern(/[0-9]+/), Validators.maxLength(3)]]
        }
      )
  }


  addSkill(event: Event){
    event.preventDefault;
    const newSkill = this.addForm.value;
    this.communicator.onAddSkill(newSkill);
  }

  toggleAddSkill(){
    this.onAddSkill.emit();
  }

  get Title(){
    return this.addForm.get('title');
  }

  get Percentage(){
    return this.addForm.get('percentage');
  }
}
