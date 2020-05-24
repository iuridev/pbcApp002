// sobrescrevendo uma biblioteca
declare namespace Express {
  export interface Request {
    company: {
      id: string;
    };
  }
}
