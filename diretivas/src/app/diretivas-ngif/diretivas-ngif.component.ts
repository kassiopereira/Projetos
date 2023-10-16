import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.scss']
})
export class DiretivasNgifComponent {

  cursos: string [] = ["Angular 2"];


  mostrarCursos: boolean = true;

  onMostrarCurso(){
    this.mostrarCursos = true;
  }
  offMostrarCurso(){
    this.mostrarCursos = false;
  }
}
