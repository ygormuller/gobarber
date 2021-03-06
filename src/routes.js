import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/SheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

// eslint-disable-next-line import/no-named-as-default
import authMiddleware from './app/middlewares/auth';
//import Appointment from './app/models/Appointment';

const routes = new Router();
const upload = multer(multerConfig);

/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'YgorMuller',
    email: 'ygormuller@mail.com.br',
    password_hash: '123456', */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // definido como global

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index)

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);

routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);


//routes.post('/files', upload.single('file'), (req, res) => {
  //return res.json({ ok:true });
 //});

// return res.json(user);
// });

export default routes;

