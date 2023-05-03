import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

}
