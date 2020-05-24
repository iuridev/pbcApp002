// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import AuthenticateCompanyService from '../services/AuthenticateCompanyService';

const sessionRouter = Router();

sessionRouter.post('/', async (require, response) => {
  try {
    const { email, password } = require.body;
    const authenticateCompanyService = new AuthenticateCompanyService();

    const { company } = await authenticateCompanyService.execute({
      email,
      password,
    });

    delete company.password;

    return response.json({ company });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionRouter;
