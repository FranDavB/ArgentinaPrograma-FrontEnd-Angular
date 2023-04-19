import { Component, Output, EventEmitter } from '@angular/core';
import { Experiences } from 'src/app/interfaces/experiences';
import { NgForm, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  
  name: string = "";
  logourl: string = "";
  description: string = "";
  date: string = "";

  @Output() onaddExperience: EventEmitter<Experiences> = new EventEmitter();

  
  addExperience(){
    const {name, logourl, description, date} = this;
    const newExperience = {name, logourl, description, date};
    this.onaddExperience.emit(newExperience);
  }

  
}
