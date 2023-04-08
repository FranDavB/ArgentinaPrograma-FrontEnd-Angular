import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'',   redirectTo:'/principal', pathMatch:"full"},
  {path:'principal', 
  component: MainComponent,
  children: [
    {path:'experiencia/:id', component: ElementexpComponent}
  ]},
  {path:'ingresar', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ElementexpComponent
]
