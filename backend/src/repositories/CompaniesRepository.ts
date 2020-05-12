import Company from '../models/Company';

interface DTOcompany{
  nome: string;
  cnpj: string;
  tel: number;
  email: string;
  date: Date;
}

class CompaniesRepository{
  private companies : Company[];

  constructor(){
    this.companies = [] //inicializando o array
  }

  public create({nome,cnpj,tel, email,date}:DTOcompany):Company{
    const company = new Company({nome, cnpj, tel, email, date});

    this.companies.push(company);
    return company;
  }

}

export default CompaniesRepository;