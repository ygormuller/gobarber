import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router(); //importando variáve//rotas raíz 	
	
routes.post('/users', UserController.store);
	
export default routes;