import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3030';  // URL do backend

  constructor(private http: HttpClient) { }

  // Método para cadastrar uma tarefa
  createTask(task: { user_id: number, description: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }

  // Método para listar tarefas, caso necessário
  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`);
  }
}
