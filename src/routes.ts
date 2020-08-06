import { Router } from 'express';

import ensureAuthenticated from './http/middlewares/ensureAuthenticated';

import UsersController from './http/controllers/UsersController';
import SessionController from './http/controllers/SessionsController';

const routes = Router();

const usersController = new UsersController();
const sessionController = new SessionController();

routes.post('/sessions', sessionController.create);

routes.use(ensureAuthenticated);
// routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

export default routes;
