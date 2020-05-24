// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import CreateAdressCompanyService from '../services/CreateAdressCompanyService';

const adressesCompanyRouter = Router();

adressesCompanyRouter.get('/', async (require, response) => {
  return response.json();
});

adressesCompanyRouter.post('/', async (require, response) => {
  try {
    const { street, number, neighborhood, city, cep } = require.body;
    const createAdress = new CreateAdressCompanyService();
    // continue ///
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default adressesCompanyRouter;
