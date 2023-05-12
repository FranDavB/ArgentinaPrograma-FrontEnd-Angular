import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ABOUT } from 'src/app/interfaces/ABOUT';
import { About } from 'src/app/interfaces/interfaces';
import { CommunicatorAboutService } from 'src/app/services/about/communicator-about.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{

  editForm: FormGroup;
  @Input() about: About = ABOUT[0];
  @Output() toggleEditAboutEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private communicator: CommunicatorAboutService){

      this.editForm = this.formBuilder.group(
        {
          id: [''],
          photourl: ['', [Validators.required, Validators.maxLength(1000)]],
          name: ['', [Validators.required]],
          profession: ['', [Validators.required]],
          description: ['', [Validators.required, Validators.maxLength(500)]],
          city: ['', [Validators.required, Validators.maxLength(250)]],
          country: ['', [Validators.required, Validators.maxLength(250)]],
        }
      )
    }
  ngOnInit(): void {
    this.editForm.patchValue(this.about);
  }

    onEditAbout(event: Event){
      const editAbout = this.editForm.value;
      this.communicator.onEditAbout(editAbout);
    }
  
    toggleEditAbout(){
      this.toggleEditAboutEventEmitter.emit();
    }

    

    get PhotoUrl(){
      return this.editForm.get('photourl');
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



