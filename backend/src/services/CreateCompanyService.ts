// armazena a(s) regras de negócio da aplicação
// um servço para cada regra de negócio
import { getCustomRepository } from 'typeorm';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

interface Request {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  tel: number;
}

class CreateCompanyServive {
  public async execute({
    name,
    cnpj,
    email,
    password,
    tel,
  }: Request): Promise<Company> {
    const companiesRepository = getCustomRepository(CompaniesRepository);
    const company = companiesRepository.create({
      name,
      cnpj,
      email,
      password,
      tel,
    });
    await companiesRepository.save(company);
    return company;
  }
}

export default CreateCompanyServive;
