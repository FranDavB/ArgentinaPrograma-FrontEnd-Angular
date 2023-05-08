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

import { DatabaseService } from './services/experiences/database.service';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './components/main/experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/main/experience/edit-experience/edit-experience.component';
import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAboutComponent } from './components/main/about/edit-about/edit-about.component';
import { FormationComponent } from './components/main/formation/formation.component';
import { ElementFormationComponent } from './components/main/formation/element-formation/element-formation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddFormationComponent } from './components/main/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/main/formation/edit-formation/edit-formation.component';
import { ProjectComponent } from './components/main/project/project.component';
import { ElementProjectComponent } from './components/main/project/element-project/element-project.component';
import { AddProjectComponent } from './components/main/project/add-project/add-project.component';
import { EditProjectComponent } from './components/main/project/edit-project/edit-project.component';


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
    EditAboutComponent,
    FormationComponent,
    ElementFormationComponent,
    FooterComponent,
    AddFormationComponent,
    EditFormationComponent,
    ProjectComponent,
    ElementProjectComponent,
    AddProjectComponent,
    EditProjectComponent,
    
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
