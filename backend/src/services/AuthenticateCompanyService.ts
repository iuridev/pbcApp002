import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Company from '../models/Company';

interface Request {
  email: string;
  password: string;
}

class AuthenticateCompanyService {
  public async execute({
    email,
    password,
  }: Request): Promise<{ company: Company; token: string }> {
    const companyRepository = getRepository(Company);

    const company = await companyRepository.findOne({ where: { email } });

    if (!company) {
      throw new Error('Incorrect email/password conbination.');
    }

    const passwordMatched = await compare(password, company.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password conbination.');
    }

    const token = sign({}, 'e44c356559adda6bf1094b753ffc76ea', {
      subject: company.id,
      expiresIn: '1d',
    });

    return { company, token };
  }
}

export default AuthenticateCompanyService;
