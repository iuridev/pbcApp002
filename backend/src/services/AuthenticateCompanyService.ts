import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Company from '../models/Company';

interface Request {
  email: string;
  password: string;
}

class AuthenticateCompanyService {
  public async execute({
    email,
    password,
  }: Request): Promise<{ company: Company }> {
    const companyRepository = getRepository(Company);

    const company = await companyRepository.findOne({ where: { email } });

    if (!company) {
      throw new Error('Incorrect email/password conbination.');
    }

    const passwordMatched = await compare(password, company.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password conbination.');
    }

    return { company };
  }
}

export default AuthenticateCompanyService;
