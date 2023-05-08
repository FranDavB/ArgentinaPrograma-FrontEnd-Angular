import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PROJECT } from 'src/app/interfaces/PROJECT';
import { Project } from 'src/app/interfaces/interfaces';
import { CommunicatorProjectService } from 'src/app/services/project/communicator-project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{
  editForm: FormGroup;
  @Input() project: Project = PROJECT[0];
  @Output() toggleEditProjectEventEmitter: EventEmitter<Project> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorProjectService){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          title: ['', [Validators.required, Validators.minLength(3)]],
          description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
          imageProject: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
          url: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
        }
      )
  }
  ngOnInit(): void {
    console.log(this.project);
  }

  onEditProject(event: Event){

    event.preventDefault;
    this.editForm.patchValue({
      id: this.project.id
    })
    const editProject = this.editForm.value;
    this.communicator.onEditProject(editProject);
    }

  toggleMostrarEditProject(){
    this.toggleEditProjectEventEmitter.emit();
  }

  get Title(){
    return this.editForm.get('title');
  }

  get Description(){
    return this.editForm.get('description');
  }

  get ImageProject(){
    return this.editForm.get('imageProject');
  }

  get Url(){
    return this.editForm.get('url');
  }

}
