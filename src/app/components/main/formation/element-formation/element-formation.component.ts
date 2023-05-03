import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-element-formation',
  templateUrl: './element-formation.component.html',
  styleUrls: ['./element-formation.component.css']
})
export class ElementFormationComponent implements OnInit{

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

}
