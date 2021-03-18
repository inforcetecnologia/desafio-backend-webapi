import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDeTarefasComponent } from './cadastro-de-tarefas/cadastro-de-tarefas.component';
import { TarefaSelecionadaComponent } from './tarefa-selecionada/tarefa-selecionada.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefasComponent },
  { path: 'cadastro-de-tarefas', component: CadastroDeTarefasComponent},
  { path: 'tarefa-selecionada', component: TarefaSelecionadaComponent},
  { path: '', pathMatch: 'full', redirectTo: '/tarefas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
