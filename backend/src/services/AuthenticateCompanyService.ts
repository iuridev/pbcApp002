import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Company from '../models/Company';
import configAuth from '../config/auth';

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

    const token = sign({}, configAuth.jwt.secret, {
      subject: company.id,
      expiresIn: configAuth.jwt.expireIn,
    });

    return { company, token };
  }
}

export default AuthenticateCompanyService;
