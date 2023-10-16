import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DataComponentComponent } from './components/data-component/data-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { MeuPrimeiroComponente} from './components/Angular2/meu-primeiro-component';
import { ChangeEmitComponent } from './components/change-emit/change-emit.component';
import { EmmiterComponent } from './components/emmiter/emmiter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DataComponentComponent,
    DirectivesComponent,
    IfRenderComponent,
    MeuPrimeiroComponente,
    ChangeEmitComponent,
    EmmiterComponent,
    ListRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
