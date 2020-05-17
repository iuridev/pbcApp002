import { Router } from 'express';
import {getCustomRepository} from 'typeorm';
import CompanyRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/createCompanyService';
import {parseISO }from 'date-fns';

const companyRouter = Router();
interface DTOCompany{
  id: string; 
  nome: string;
  cnpj: string;
  tel: number;
  email: string;
  date: string;
}

companyRouter.get('/', (request, response) =>{
  const companyRepository = getCustomRepository(CompanyRepository);
  const companies = companyRepository.find();

  return response.json(companies);
});

companyRouter.post('/', async (request, response)=>{
  try {
    const {nome, cnpj, tel, email, date}:DTOCompany = request.body;
    const createCompany = new CreateCompanyService();
    const formatDate = parseISO(date);
    const company = await createCompany.execute({
      nome,
      cnpj,
      tel,
      email,
      date:formatDate,
    });
    return response.json(company)

  } catch (error) {
    return response.status(400).json({error: error.message});
  }
  
});

export default companyRouter;
