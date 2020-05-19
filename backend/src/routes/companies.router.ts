// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import CompaniesRepository from '../repositories/CompaniesRepository';

const companiesRouter = Router();
const companiesRepository = new CompaniesRepository();

companiesRouter.get('/', (require, response) =>
  response.json({ message: 'Hello PuclicApp' }),
);

companiesRouter.post('/', (require, response) =>
  response.json({ message: 'Hello PuclicApp' }),
);

export default companiesRouter;
