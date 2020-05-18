import { Router } from 'express';

const routes = Router();

routes.get('/', (require, response) =>
  response.json({ message: 'Hello PuclicApp' }),
);

export default routes;
