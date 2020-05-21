// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';

const adressesCompanyRouter = Router();

adressesCompanyRouter.get('/', async (require, response) => {
  return response.json();
});

export default adressesCompanyRouter;
