import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aula-bind';
  valorInicialApp = 5;
  deletarCiclo: Boolean = false;
  mudarValor(){
    this.valorInicialApp++;
  }
  destruirCiclo(){
    this.deletarCiclo = true;

  }
}
