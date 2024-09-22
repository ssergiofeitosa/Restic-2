import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes'; // Corrige o caminho para o relativo
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';

const app = express();
const port = 3030;

// Configura CORS para permitir requisições de outros domínios
app.use(cors());
// Adiciona o middleware bodyParser para analisar requisições JSON
app.use(bodyParser.json());

// Rotas definidas em x para serem usadas com o prefixo /
app.use('/', userRoutes);
app.use('/', taskRoutes);

// Verifica se o arquivo atual é o módulo principal
if (require.main === module) {
  // Inicia o servidor na porta definida
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default app;
