import { Component, OnInit } from '@angular/core';
import { faBars, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faDiscord, faGoogle, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import {Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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

  constructor(private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {
    console.log('Web ' + Breakpoints.Web);
    console.log('WebLandscape ' + Breakpoints.WebLandscape);
    console.log('WebPortrait ' + Breakpoints.WebPortrait);

    console.log('Tablet ' + Breakpoints.Tablet);
    console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
    console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

    console.log('Handset ' + Breakpoints.Handset);
    console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
    console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

    console.log('XSmall ' + Breakpoints.XSmall);
    console.log('Small ' + Breakpoints.Small);
    console.log('Medium ' + Breakpoints.Medium);
    console.log('Large ' + Breakpoints.Large);
    console.log('XLarge ' + Breakpoints.XLarge);
    this.responsive.observe(Breakpoints.HandsetLandscape).subscribe(result =>{
      if (result.matches) {
        console.log("screens matches HandsetLandscape");
      }
    })
  }

}
