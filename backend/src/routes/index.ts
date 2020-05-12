import { Router } from 'express';
import company from './CompanyRoute';

const routes = Router();

routes.use('/', company);

export default routes;
