import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {
  private baseUrl = 'http://localhost:3030'; // URL do seu backend

  constructor(private http: HttpClient) {}

  // Método para cadastrar um usuário
  cadastrarUsuario(nome: string, email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, { name: nome, email });
  }

  // Método para cadastrar uma tarefa
  cadastrarTarefa(descricao: string, userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`, { user_id: userId, description: descricao });
  }

  // Método para recuperar tarefas de um usuário
  getUserTasks(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}/tasks`);
  }
}
