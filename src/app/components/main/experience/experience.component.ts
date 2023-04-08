import { Component, OnInit } from '@angular/core';
import { Experiences } from 'src/app/interfaces/experiences';
import { DatabaseService } from 'src/app/services/database.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
  active: boolean = false;
  subscription?: Subscription;
  experiences: Experiences[] = [];

  constructor(private database: DatabaseService, private router: Router){
  }

  ngOnInit(): void {
    this.database.getExperience().subscribe((dbexperiences) => {
      this.experiences = dbexperiences;
      console.log("DatabaseService leido y cargado");
    });
  }

  isActive(a: number){
    return this.active = !this.active;
  }

  onSelect(experience: any){
    this.router.navigate(['/principal/experiencia', experience.id])
  }

}
