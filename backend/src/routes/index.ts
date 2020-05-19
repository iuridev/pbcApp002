// arquivo principal das rotas, como um sumario de rotas
import { Router } from 'express';
import companiesRouter from './companies.router';

const routes = Router();

routes.use('/companies', companiesRouter);

export default routes;
