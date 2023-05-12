import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PROJECT } from 'src/app/interfaces/PROJECT';
import { Skill } from 'src/app/interfaces/interfaces';
import { CommunicatorSkillService } from 'src/app/services/skill/communicator-skill.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  editForm: FormGroup;
  @Input() skill: Skill = PROJECT[0];
  @Output() toggleEditSkillEventEmitter: EventEmitter<Skill> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorSkillService){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          title: ['', [Validators.required]],
          percentage: ['', [Validators.required, Validators.pattern(/[0-9]+/), Validators.maxLength(3)]]
        }
      )
  }

  ngOnInit(): void {
    this.editForm.patchValue(this.skill);
  }

  onEditSkill(event: Event){

    event.preventDefault;
    this.editForm.patchValue({
      id: this.skill.id
    })
    const editSkill = this.editForm.value;
    this.communicator.onEditSkill(editSkill);
    }

  toggleMostrarEditSkill(){
    this.toggleEditSkillEventEmitter.emit();
  }

  get Title(){
    return this.editForm.get('title');
  }

  get Percentage(){
    return this.editForm.get('percentage');
  }
}
