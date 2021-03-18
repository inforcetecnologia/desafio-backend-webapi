import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas:any = [];
  constructor(private tarefasService:TarefasService) { }

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(){
    this.tarefasService.getTarefas().subscribe(
      response => {
        this.tarefas = response
      },
      error => {
        alert('Houve um erro ao carregar a lista')
      }
    )
  }

  deletar(id:string){
    this.tarefasService.deletarTarefa(id).subscribe(
      reponse => {
          if(confirm("Confirma a exclusão desse registro?")) {
            this.listarTarefas();
          }
      },
      error => {
        alert('Houve um erro ao excluir')
      }
    )
  }
}
