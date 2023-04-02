import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faDiscord, faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

faBars = faBars;
faDiscord = faDiscord;
faGoogle = faGoogle;
faFacebook= faFacebook;

}
