import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { iCursos } from './Cursos';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent {
  cursos$: Observable<any> | undefined;


  constructor(private cursoService : CursosService){
    /* this.obterCursos(); */
  }
  ngOnInit(){
    this.obterCursos();
  }
  renderArray(){
    for (let curso in this.cursos$){
        console.log(curso)

    }

  }
  obterCursos(){
    this.cursos$ = this.cursoService.list()

  }


}
