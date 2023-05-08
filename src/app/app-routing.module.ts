import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementexpComponent } from './components/main/experience/elementexp/elementexp.component';
import { LoginComponent } from './components/header/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'',   redirectTo:'portfolio', pathMatch:"full"},
  {path:'ingresar', component: LoginComponent},
  {path:'portfolio', component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ElementexpComponent
]
