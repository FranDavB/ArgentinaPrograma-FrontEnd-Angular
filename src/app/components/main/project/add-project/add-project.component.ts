import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/interfaces/interfaces';
import { CommunicatorProjectService } from 'src/app/services/project/communicator-project.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  addForm: FormGroup;
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorProjectService){

      this.addForm = this.formBuilder.group(
        {
          title: ['', [Validators.required, Validators.minLength(3)]],
          description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
          imageProject: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
          url: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
        }
      )
    }


  addProject(event: Event){
    event.preventDefault;
    const newProject = this.addForm.value;
    this.communicator.onAddProject(newProject);
  }

  toggleAddProject(){
    this.onAddProject.emit();
  }

  get Title(){
    return this.addForm.get('title');
  }

  get Description(){
    return this.addForm.get('description');
  }

  get ImageProject(){
    return this.addForm.get('imageProject');
  }

  get Url(){
    return this.addForm.get('url');
  }

}
