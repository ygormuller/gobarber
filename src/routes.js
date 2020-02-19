import { Router } from 'express';
import User from './app/models/User';
//import UserController from './app/controllers/Usercontroller';
//import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', async(req, res) => {
    const user = await User.create({
	    name:'nonoono',
	    email:'nonon@nono.com.br',
        password_hash:'123456',
        
        //routes.post('/users', UserController.store);
        //routes.post('/sessions', UserController.store);
    });
    
	return res.json(user);
	});

	
export default routes;