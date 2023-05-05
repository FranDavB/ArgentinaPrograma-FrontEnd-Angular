import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ABOUT } from 'src/app/interfaces/ABOUT';
import { About } from 'src/app/interfaces/interfaces';
import { CommunicatorService } from 'src/app/services/experiences/communicator-experience.service';
import { DatabaseService } from 'src/app/services/experiences/database.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  mostrarEditAbout: boolean = false;
  about: About = ABOUT[0];
  
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });

    this.getAbout();
  }

  constructor(
    private communicator: CommunicatorService,
    private database: DatabaseService
  ){
    this.communicatorEditExperience();
  }

  communicatorEditExperience(){
    this.communicator.OnEditAboutObservable().subscribe((editExperience)=>{
      this.editAbout(editExperience)
  })
  }

  editAbout(about: About){
      this.database.editAbout(about).subscribe( aboutEdit => {
        this.about = aboutEdit; 
      })
  }

  toggleEditAbout(){
    this.mostrarEditAbout = !this.mostrarEditAbout
  }

  getAbout(){
    this.database.getAbout().subscribe((dbAbout) => {
      const getAbout = dbAbout.find(item => item.id === 1);
      if (getAbout != null){
        this.about = getAbout;
        console.log(this.about);
      }
      
    });
  }

}
