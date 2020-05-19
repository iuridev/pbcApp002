// repositorios tem a responsabilidade de trabalhar e manipular os dados
import { EntityRepository, Repository } from 'typeorm';
import Company from '../models/Company';

@EntityRepository(Company)
class CompaniesRepository extends Repository<Company> {
  // in future methods for filters
}

export default CompaniesRepository;
