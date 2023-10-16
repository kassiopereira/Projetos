import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = 'Teste';
  sobrenome: string = 'Do teste';
  userData = {
    senha: 'senhateste',
    email: 'emailteste',
  };
  title = 'crud-angular';
}
