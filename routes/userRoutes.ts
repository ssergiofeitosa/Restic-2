import express from 'express';
import { createUser } from '../controllers/userController'; // Importação nomeada

const router = express.Router();

// Chama a função createUser para criar um usuário
router.post('/users', createUser);

// Exporta o router
export default router;
