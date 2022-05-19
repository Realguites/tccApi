import { Router } from 'express';
import userRouter from './user.routes';
import loginRouter from './login.routes';
import smartphoneRouter from './smartphone.routes';

const routes = Router();


routes.use('/user',userRouter);
routes.use('/login',loginRouter);
routes.use('/smartphone',smartphoneRouter);

export default routes;
