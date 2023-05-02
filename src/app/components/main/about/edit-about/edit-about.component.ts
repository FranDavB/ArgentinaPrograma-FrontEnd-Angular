import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommunicatorService } from 'src/app/services/communicator.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent {

  editForm: FormGroup;
  @Output() toggleEditAboutEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorService){

      this.editForm = this.formBuilder.group(
        {
          id: ['1'],
          photoURL: ['', [Validators.required, Validators.minLength(10)]],
          name: ['', [Validators.required, Validators.minLength(3)]],
          profession: ['', [Validators.required, Validators.minLength(3)]],
          description: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(1000)]],
          city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        }
      )
    }

    onEditAbout(event: Event){
      const editAbout = this.editForm.value;
      this.communicator.onEditAbout(editAbout);
    }
  
    toggleEditAbout(){
      this.toggleEditAboutEventEmitter.emit();
    }

    

    get PhotoUrl(){
      return this.editForm.get('photoURL');
    }
  
    get Name(){
      return this.editForm.get('name');
    }
  
    get Profession(){
      return this.editForm.get('profession');
    }
  
    get Description(){
      return this.editForm.get('description');
    }
  
    get City(){
      return this.editForm.get('city');
    }
  
    get Country(){
      return this.editForm.get('country');
    }
  
  }



