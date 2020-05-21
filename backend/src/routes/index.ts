// arquivo principal das rotas, como um sumario de rotas
import { Router } from 'express';
import companiesRouter from './companies.router';
import adressesCompanyRouter from './adressescompany.router';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/adressescompany', adressesCompanyRouter);

export default routes;
