import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-cadastro-de-tarefas',
  templateUrl: './cadastro-de-tarefas.component.html',
  styleUrls: ['./cadastro-de-tarefas.component.css']
})
export class CadastroDeTarefasComponent implements OnInit {

  public tarefa:Tarefa = new Tarefa();
  constructor(private tarefasService:TarefasService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.tarefasService.salvarTarefa(this.tarefa).subscribe(
      response => {
        alert('Salvo com sucesso')
      },
      error => {
        alert('Ocorreu um erro')
      }
    )

  }

}
