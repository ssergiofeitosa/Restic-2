import { Component } from '@angular/core';
import { UserTaskService } from './user-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent {
  nome: string = '';
  email: string = '';
  descricao: string = '';
  userId: string = '';

  errorMessage: string = '';

  constructor(private userTaskService: UserTaskService) {}

  // Limpa a mensagem de erro
  clearError() {
    this.errorMessage = '';
  }

  // Cadastrar um novo usuário
  cadastrarUsuario() {
    this.clearError();
    this.userTaskService.cadastrarUsuario(this.nome, this.email)
      .subscribe({
        next: (response) => {
          alert(`Usuário cadastrado com sucesso! ID: ${response.id}`);
        },
        error: (error) => {
          this.errorMessage = `Erro ao cadastrar usuário: ${error.message || 'Erro desconhecido.'}`;
        }
      });
  }

  // Cadastrar uma nova tarefa
  cadastrarTarefa() {
    this.clearError();
    this.userTaskService.cadastrarTarefa(this.descricao, this.userId)
      .subscribe({
        next: (response) => {
          alert(`Tarefa cadastrada com sucesso! ID: ${response.id}`);
        },
        error: (error) => {
          this.errorMessage = `Erro ao cadastrar tarefa: ${error.message || 'Erro desconhecido.'}`;
        }
      });
  }
}
