import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  nome:string = 'nome';
  name:string = 'teste';
  nomeDoCurso : string = 'Angular';
  mouseOverOnOf: boolean = false;
  valorAtual: string= '';
  valorSalvo: string= ''
  cursoAngular: Boolean = true;
  url = 'http://loiane.training';


  pessoa: any={
    nomePessoa: 'def',
    idade: 20
  }


  getValor(){
    return 5;
  }
  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão Clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }
  salvarValor(valor : any){
    this.valorSalvo = valor;
  }
  mouseOver(){
    this.mouseOverOnOf = !this.mouseOverOnOf;
  }
  atualizarNome(valor:any){
    this.name = (<HTMLInputElement>valor.target).value;
  }

  onMudouValor(evento:any){
    console.log(evento.novoValor)
  }





}
