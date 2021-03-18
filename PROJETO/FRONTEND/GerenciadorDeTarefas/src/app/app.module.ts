import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadastroDeTarefasComponent } from './cadastro-de-tarefas/cadastro-de-tarefas.component';
import { TarefaSelecionadaComponent } from './tarefa-selecionada/tarefa-selecionada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TarefasComponent,
    CadastroDeTarefasComponent,
    TarefaSelecionadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
