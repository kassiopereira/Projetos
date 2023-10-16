import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  enderecoPortal: string;
  cursos: string [];

  constructor(private cursosService:CursosService){
    this.enderecoPortal = "http://loiane.training.com.br";
    this.cursos = this.cursosService.getcursos();

  }

}
