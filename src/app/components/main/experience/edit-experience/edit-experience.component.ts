import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EXPERIENCE } from 'src/app/interfaces/EXPERIENCE';
import { Experiences } from 'src/app/interfaces/experiences';
import { NgForm, FormControl, FormsModule } from '@angular/forms';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})

export class EditExperienceComponent {
  @Input() experience: Experiences = EXPERIENCE[0];
  @Output() toggleEditExpEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private communicator: CommunicatorService){}

  onEditExp(experiencia: Experiences){
    this.communicator.onEditExperience(experiencia);
  }

  toggleEditExp(){
    this.toggleEditExpEventEmitter.emit();
  }
}
