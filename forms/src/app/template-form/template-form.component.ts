import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  usuario : any ={
    nome: null,
    email: null
  }
classeErroNome: any;

  onSubmit(form: any){
    console.log(form)

  }
}
