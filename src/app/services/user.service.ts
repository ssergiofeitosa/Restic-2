import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3030';  // URL do backend

  constructor(private http: HttpClient) { }

  // Método para cadastrar um usuário
  createUser(user: { name: string, email: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Método para listar usuários, caso necessário
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
