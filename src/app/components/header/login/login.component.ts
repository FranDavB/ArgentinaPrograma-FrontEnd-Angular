import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder ){
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

  login(){
    console.log("Login funcionando correctamente");
  }
}
