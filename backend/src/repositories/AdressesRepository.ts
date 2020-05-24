// repositorios tem a responsabilidade de trabalhar e manipular os dados
import { EntityRepository, Repository } from 'typeorm';
import AdressesCompany from '../models/AdressesCompany';

@EntityRepository(AdressesCompany)
class CompaniesRepository extends Repository<AdressesCompany> {
  // in future methods for filters
}

export default CompaniesRepository;
