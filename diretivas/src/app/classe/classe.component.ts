import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent {
  meuFavorito: boolean = true

  tarefa: any={

    desc: 'Descricação  da tarefa',
    responsavel:{
      usuario: null
    }
  }



  onClick(){
    this.meuFavorito = !this.meuFavorito

  }

}
