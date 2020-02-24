/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// eslint-disable-next-line import/no-named-as-default
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'YgorMuller',
    email: 'ygormuller@mail.com.br',
    password_hash: '123456', */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // definido como global

routes.put('/users', UserController.update);
// });

// return res.json(user);
// });

export default routes;
