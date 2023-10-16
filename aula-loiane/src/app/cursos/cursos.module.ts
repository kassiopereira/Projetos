import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoDetalhe3Component } from './curso-detalhe3/curso-detalhe3.component';
import { CursoDetalhe2Component } from './curso-detalhe2/curso-detalhe2.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoDetalhe2Component,
    CursoDetalhe3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
