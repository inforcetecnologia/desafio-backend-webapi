import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefa-selecionada',
  templateUrl: './tarefa-selecionada.component.html',
  styleUrls: ['./tarefa-selecionada.component.css']
})
export class TarefaSelecionadaComponent implements OnInit {
  tarefas:any;

  constructor(private tarefaService: TarefasService, private route: ActivatedRoute) { }

  /*ngOnInit(): void {
    this.route.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.tarefaId(parametros['id']);
      }
    });
  }

  tarefaId(id:any){
    this.tarefaService.getTarefasId(id).subscribe(
      response => {
        this.tarefas = response;
      },
      error => {
        alert('Houve um erro ao retornar a tarefa');
      }
    )
  }*/

  ngOnInit(): void {
    this.route.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        this.tarefaService.getTarefasId(parametros['id']).subscribe(
          response => {
            this.tarefas = response;
          },
          error => {
            alert('Houve um erro ao retornar a tarefa');
          }
        )
      }
    });
  }

}
