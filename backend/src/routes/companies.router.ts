// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import CompaniesRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();
const companiesRepository = new CompaniesRepository();

companiesRouter.get('/', (require, response) =>
  response.json({ message: 'Hello PuclicApp' }),
);

companiesRouter.post(
  '/',
  (require, response) => {
    try {
      const createCompany = new CreateCompanyService(companiesRepository);
      return response.json(createCompany);
    } catch (erro) {
      return response.status(400).json({ error: erro.message });
    }
  },
  // response.json({ message: 'Hello PuclicApp' }),
);

export default companiesRouter;
