// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router, request } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateAdressCompanyService from '../services/CreateAdressCompanyService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AdressesRepository from '../repositories/AdressesRepository';

const adressesCompanyRouter = Router();
// como todas as rotas precisaram de autenticação o middleware pode ser chamado
// antes das rotas
adressesCompanyRouter.use(ensureAuthenticated);

adressesCompanyRouter.get('/', async (require, response) => {
  return response.json({
    message: 'em desenvolvimento',
  });
});

adressesCompanyRouter.post('/', async (require, response) => {
  return response.json({
    message: 'em desenvolvimento',
  });
  // try {
  //   const { street, number, neighborhood, city, cep } = require.body;
  //   const createAdress = new CreateAdressCompanyService();
  //   // continue ///
  // } catch (error) {
  //   return response.status(400).json({ error: error.message });
  // }
});

export default adressesCompanyRouter;
