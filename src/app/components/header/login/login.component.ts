import { Component } from '@angular/core';
import { NgForm, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(){
    console.log("Login funcionando correctamente");
  }
}
