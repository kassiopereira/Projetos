import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.css']
})
export class EmmiterComponent {
  MyNumber : number = 0;

  onChangeNumber(){
      this.MyNumber= Math.floor(Math.random() * 10)
  }

}
