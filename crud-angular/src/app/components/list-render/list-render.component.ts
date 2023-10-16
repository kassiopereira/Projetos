import { Animal } from './../../Animal';

import { Component } from '@angular/core';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  animals =[
  {name: 'Tuca', type: 'Dog', age: 1},
  {name: 'Tom', type: 'Cat', age: 4},
  {name: 'Frida', type: 'Dog', age: 13},
  {name: 'Bob', type: 'Horse', age: 2},
];

  animalDeatail = ''
  constructor(){

  }
  showAge(animal: any) {
    this.animalDeatail = `o Pet ${animal.name} tem ${animal.age} anos`;
  }
}
