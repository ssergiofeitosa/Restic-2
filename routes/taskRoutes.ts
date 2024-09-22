import express from 'express';
import { createTask, getUserTasks } from '../controllers/taskController'; // Importação nomeada

const router = express.Router();

// Quando uma requisição POST é feita, a função createTask em taskController é chamada
router.post('/tasks', createTask);

// Para um GET, recupera as tarefas associadas a um usuário
router.get('/users/:userId/tasks', getUserTasks);

// Exporta o router para ser usado em outros lugares
export default router;
