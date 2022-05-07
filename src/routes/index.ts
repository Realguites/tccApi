import { Router } from 'express';
import userRouter from './user.routes';
import loginRouter from './login.routes';

const routes = Router();


routes.use('/user',userRouter);
routes.use('/login',loginRouter);

export default routes;
