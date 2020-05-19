// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CompaniesRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

companiesRouter.get(
  '/',
  async (require, response) => {
    const companiesRepository = getCustomRepository(CompaniesRepository);
    const companies = await companiesRepository.find();
    return response.json(companies);
  },
  // response.json({ message: 'Hello PuclicApp' }),
);

companiesRouter.post(
  '/',
  async (require, response) => {
    try {
      const { name, cnpj, email, tel } = require.body;
      const createCompany = new CreateCompanyService();
      const company = await createCompany.execute({
        name,
        cnpj,
        email,
        tel,
      });
      return response.json(company);
    } catch (erro) {
      return response.status(400).json({ error: erro.message });
    }
  },
  // response.json({ message: 'Hello PuclicApp' }),
);

export default companiesRouter;
