import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/interfaces';
import * as AOS from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      offset: 200
    });
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
