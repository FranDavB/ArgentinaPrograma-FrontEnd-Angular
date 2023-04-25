import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/experiences';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password: ''
  }

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthenticationService,
              private router: Router ){
    this.formLogin = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]]
      }
    )
  }

  get Email(){
    return this.formLogin.get("email");
  }

  get Password(){
    return this.formLogin.get("password");
  }

  onLogin(event: Event){

    event.preventDefault;

    this.auth.login(this.formLogin.value).subscribe(response => {
      
      console.log('RESPONSE: ' + response);
      this.router.navigate(["/portfolio"]);
      
    })
  }
}
