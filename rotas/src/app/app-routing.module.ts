import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const appRoutes: Routes = [
  {path:'cursos', component:CursosComponent},
  {path:'curso/:id', component:CursoDetalheComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'naoEncontrado', component:CursoNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
