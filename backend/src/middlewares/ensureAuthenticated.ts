// middleware para verificar se usuario esta logado na aplicação
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import configAuth from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  respose: Response,
  next: NextFunction,
): void {
  const hederToken = request.headers.authorization;

  if (!hederToken) {
    request.company = { id: '' };
    throw new Error("You don't have authorization.");
  }

  // remove bearer
  try {
    const [, token] = hederToken.split(' ');
    const tokenDecoded = verify(token, configAuth.jwt.secret);

    const { sub } = tokenDecoded as TokenPayload;

    // tudo q colocarmos dentro do request ou response pode ser usado em outras rotas
    request.company = { id: sub };

    return next();
  } catch {
    throw new Error('Invalid JWT Token.');
  }
}
