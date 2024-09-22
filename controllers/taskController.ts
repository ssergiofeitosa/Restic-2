import { Request, Response } from 'express';
import db from '../db';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { user_id, description } = req.body;
  try {
    const query = 'INSERT INTO tasks (user_id, description) VALUES (?, ?)';
    const [result] = await db(query, [user_id, description]);  // Aqui chamamos db diretamente
    res.status(201).send({ id: result.insertId, user_id, description });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getUserTasks = async (req: Request, res: Response): Promise<void> => {
  const user_id = req.params['userId'];  // Correção no acesso ao parâmetro
  try {
    const query = 'SELECT * FROM tasks WHERE user_id = ?';
    const [results] = await db(query, [user_id]);  // Chamamos db diretamente
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
};
