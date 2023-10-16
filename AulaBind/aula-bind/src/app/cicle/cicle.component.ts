import { Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.scss'],

})
export class CicleComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() valorInicial: number = 10;

  constructor(){
    console.log('contructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck(){
    this.log('ngDoCheck');

  }
  ngOnChanges(){
    this.log('ngOnChanges');

  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');

  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }


  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook:string)
  {
    console.log(hook)
  }



}
