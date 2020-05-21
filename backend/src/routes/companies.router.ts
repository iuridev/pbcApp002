// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import CompaniesRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

companiesRouter.get('/', async (require, response) => {
  const companiesRepository = getCustomRepository(CompaniesRepository);
  const companies = await companiesRepository.find();
  return response.json(companies);
});

companiesRouter.post('/', async (require, response) => {
  try {
    const { name, cnpj, email, password, tel } = require.body;
    const hashPassword = await hash(password, 8);
    const createCompany = new CreateCompanyService();
    const company = await createCompany.execute({
      name,
      cnpj,
      email,
      password: hashPassword,
      tel,
    });
    return response.json(company);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

export default companiesRouter;
