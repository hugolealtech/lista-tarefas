import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.api;
  constructor(private http: HttpClient) { }
  getTasks(): Observable <Tarefa []>{
    return this.http.get<Tarefa[]>(this.apiUrl);
  }
  deleteTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}${tarefa.id}`);
  }
}
