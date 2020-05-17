import {getCustomRepository} from 'typeorm';
import {startOfHour, parseISO }from 'date-fns';
import Company from '../models/Company';
import companyRepository from '../repositories/CompaniesRepository';

interface DTOCompany{
  id: string; 
  nome: string;
  cnpj: string;
  tel: number;
  email: string;
  date: Date;
}

class CreateCompanyService{
  public async execute({nome, cnpj, tel, email, date}:Omit<DTOCompany, "id">):Promise<Company> {
    const companyResp = getCustomRepository(companyRepository);
    
     const companydate = startOfHour(date)

    //  const findCompanyInSameDate = companyResp.findByDate

    const company = companyResp.create({
      nome: nome,
      cnpj: cnpj,
      tel: tel,
      email: email,
      date: companydate,
    })
    await companyResp.save(company);

    return company;
  }

}

export default CreateCompanyService;