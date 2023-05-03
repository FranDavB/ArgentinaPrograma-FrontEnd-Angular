import { Component, OnInit } from '@angular/core';
import {Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private responsive: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  }


  navegar(idDestino: string){
    const elementoDestino = document.querySelector(idDestino);
    if (elementoDestino) {
      elementoDestino.scrollIntoView({ behavior: 'smooth' });
    } 
  }

}
