import { getCustomRepository } from 'typeorm';
import AdressesCompany from '../models/AdressesCompany';
import AdressesRepository from '../repositories/AdressesRepository';

interface Request {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  cep: number;
  companyfkid: string;
}

class CreateAdressCompanyService {
  public async execute({
    street,
    number,
    neighborhood,
    city,
    cep,
    companyfkid,
  }: Request): Promise<AdressesCompany> {
    const addessRepository = getCustomRepository(AdressesRepository);
    const adress = addessRepository.create({
      street,
      number,
      neighborhood,
      city,
      cep,
      companyfkid,
    });
    await addessRepository.save(adress);
    return adress;
  }
}

export default CreateAdressCompanyService;
