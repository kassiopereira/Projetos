import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-emit',
  templateUrl: './change-emit.component.html',
  styleUrls: ['./change-emit.component.css']
})
export class ChangeEmitComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  }

}
