import { Router } from 'express';
import CompanyRoute from './CompanyRoute';

const routes = Router();

routes.use('/', CompanyRoute);

export default routes;
