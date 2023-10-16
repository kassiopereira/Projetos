import { Component, ElementRef, EventEmitter, Input, Output,ViewChild } from '@angular/core';
import * as _ from  'lodash';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

  list = _.map([1,2,3], (n) => `# ${n}` );

  @Input() valor: number= 0;

  @Output() mudouValor = new EventEmitter;

  @ViewChild('campoInput') valorCampoInput!: ElementRef;

  aumentarValor(){
    this.valorCampoInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valorCampoInput.nativeElement.value});
  }
  diminuirValor(){
    this.valorCampoInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valorCampoInput.nativeElement.value});

  }

}
