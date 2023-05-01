import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }

  @ViewChild('tituloAbout', {static: false}) tituloAbout!: ElementRef;
}
