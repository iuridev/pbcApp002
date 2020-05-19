// armazena a(s) regras de negócio da aplicação
// um servço para cada regra de negócio
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

class CreateCompanyServive {
  private companiesRepository: CompaniesRepository;

  constructor(companiesRepository: CompaniesRepository) {
    this.companiesRepository = CompaniesRepository;
  }

  public execute(): Company {}
}

export default CreateCompanyServive;
