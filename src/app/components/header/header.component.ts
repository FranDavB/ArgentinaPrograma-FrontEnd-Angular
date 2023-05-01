import { Component, OnInit } from '@angular/core';
import { faBars, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faDiscord, faGoogle, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import {Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faDiscord = faDiscord;
  faGoogle = faGoogle;
  faFacebook= faFacebook;
  faRightToBracket= faRightFromBracket;
  faCanadianMapleLeaf= faSun;

  constructor(
    private responsive: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  navegar(idDestino: string){
    const elementoDestino = document.querySelector(idDestino);
    if (elementoDestino) {
      elementoDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
