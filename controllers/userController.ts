import { Request, Response } from 'express';
import db from '../db'; // Ajuste conforme a forma de exportação do seu db

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  console.log('Recebendo dados do usuário:', name, email);
  try {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const [result] = await db(query, [name, email]);  // Chama db diretamente
    res.status(201).send({ id: result.insertId, name, email });
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send(err);
  }
};
