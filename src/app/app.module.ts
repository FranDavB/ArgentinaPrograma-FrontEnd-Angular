import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/main/about/about.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DatabaseService } from './services/database.service';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './components/main/experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/main/experience/edit-experience/edit-experience.component';
import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ExperienceComponent,
    ElementexpComponent,
    LoginComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DatabaseService,
    AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
