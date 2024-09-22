import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index'; // Certifique-se que o app foi exportado corretamente

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando Rotas de Usuário', () => {
  before(async () => {
    await db('DELETE FROM users');
  });

  it('Deve criar um novo usuário', async () => {
    const res = await chai.request(app)  // Certifique-se que 'app' está corretamente tipado
      .post('/users')
      .send({ name: 'Test User', email: 'test@example.com' });

    expect(res).to.have.status(201);
    expect(res.body).to.include({ name: 'Test User', email: 'test@example.com' });
  });
});
