import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  constructor() {}
  getcursos(){
      return  ['PHP','Java','C++','Angular','Python'];
    }

}
