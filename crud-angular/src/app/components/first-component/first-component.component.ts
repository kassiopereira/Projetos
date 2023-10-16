import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  nome = 'Kássio';
  role= 'Estagiario';
  hobbie = ['Correr','Jogar','Muai Thay'];

}
