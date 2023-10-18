import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';


@NgModule({
  declarations: [
    CursoListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
