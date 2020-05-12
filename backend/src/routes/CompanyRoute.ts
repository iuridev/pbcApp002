import { Router } from 'express';

const company = Router();

company.get('/', (request, response) =>
  response.json({
    message: 'Hello World',
  })
);

export default company;
