import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  url = 'https://localhost:44361/api/v1/tarefas';

  constructor( private http:HttpClient) { }

  getTarefas():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  salvarTarefa(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.post<Tarefa>(this.url, tarefa);
  }

  deletarTarefa(id:string):Observable<any>{
    return this.http.delete(this.url + "/" +id);
  }

  getTarefasId(id:string):Observable<any>{
    return this.http.get<any>(this.url + "/" + id);
  }
}
