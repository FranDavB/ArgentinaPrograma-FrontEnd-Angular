import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ElementFormationComponent } from './components/main/formation/element-formation/element-formation.component';


const routes: Routes = [
  {path:'',   redirectTo:'portfolio', pathMatch:"full"},
  {path:'ingresar', component: LoginComponent},
  {path:'portfolio', component: MainComponent,
    children: [
      {path:'experiencia/:id', component: ElementexpComponent},
      {path:'acerca-de/:id', component: ElementFormationComponent},
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
