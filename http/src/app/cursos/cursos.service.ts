import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { iCursos } from './curso-lista/Cursos';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}
  private readonly url = `${environment.api}/cursos`;

  list() {
    return this.http.get<iCursos[]>(this.url).pipe(delay(2000),tap(console.log));
  }
  getAll(){
    return this.http.get<iCursos[]>(this.url)
  }
  createCurso(curso: iCursos){
    return this.http.post<iCursos[]>(this.url, curso).pipe(take(1))
  }
}
