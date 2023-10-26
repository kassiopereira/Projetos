import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

const routes: Routes = [{
  path: '', component:CursoListaComponent
},
{
  path: 'novo', component:CursosFormComponent
},
{
  path: 'editar/:id', component:CursosFormComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
