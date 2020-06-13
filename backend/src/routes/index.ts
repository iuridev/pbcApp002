// arquivo principal das rotas, como um sumario de rotas
import { Router } from 'express';
import companiesRouter from './companies.router';
import adressesCompanyRouter from './adressescompany.router';
import productRouter from './products.router';
import sessionRouter from './session.router';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/adressescompany', adressesCompanyRouter);
routes.use('/session', sessionRouter);
routes.use('/productRouter', productRouter);

export default routes;
