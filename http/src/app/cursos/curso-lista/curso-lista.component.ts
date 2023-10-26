import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { iCursos } from './Cursos';
import { Observable, Subject, catchError, of } from 'rxjs';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss'],
})
export class CursoListaComponent implements OnInit {
  cursos$: Observable<iCursos[]> | undefined;
  erro$ = new Subject<boolean>();

  bsModalRef?: BsModalRef;

  constructor(
    private cursoService: CursosService,
    private alertService: AlertModalService
  ) {}
  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.cursos$ = this.cursoService.list().pipe(
      catchError((erro) => {
        console.error(erro);
        this.hanleError()
        return of();
      })
    );
  }
  hanleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')

  }

}
