import { Router } from 'express';
import companiesRouter from './companies.router';

const routes = Router();

routes.use('/companies', companiesRouter);

export default routes;
