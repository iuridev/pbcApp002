// iuri
// Routes são responsáves por trabalhar com os dados que transitam do front para o backend.
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateAdressCompanyService from '../services/CreateAdressCompanyService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AdressesRepository from '../repositories/AdressesRepository';

const adressesCompanyRouter = Router();
// como todas as rotas precisaram de autenticação o middleware pode ser chamado
// antes das rotas
adressesCompanyRouter.use(ensureAuthenticated);

adressesCompanyRouter.get('/', async (request, response) => {
  const adressesRepository = getCustomRepository(AdressesRepository);
  const adresses = await adressesRepository.find({
    where: { companyfkid: request.company.id },
  });
  return response.json(adresses);
});

adressesCompanyRouter.post('/', async (request, response) => {
  try {
    const { street, number, neighborhood, city, cep } = request.body;
    const createAdress = new CreateAdressCompanyService();
    const adress = await createAdress.execute({
      street,
      number,
      neighborhood,
      city,
      cep,
      companyfkid: request.company.id,
    });
    return response.json(adress);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default adressesCompanyRouter;
