import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AddExperienceComponent } from './components/main/experience/add-experience/add-experience.component';


const routes: Routes = [
  {path:'',   redirectTo:'portfolio', pathMatch:"full"},
  {path:'ingresar', component: LoginComponent},
  {path:'portfolio', component: MainComponent,
    children: [
      {path:'experiencia/:id', component: ElementexpComponent},
      {path:'experiencia/agregar-experiencia', component: AddExperienceComponent},
    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ElementexpComponent
]
