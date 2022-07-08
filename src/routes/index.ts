import { Router } from 'express';
import userRouter from './user.routes';
import loginRouter from './login.routes';
import smartphoneRouter from './smartphone.routes';
import modalidadeRouter from './modalidade.routes';
import produtoRouter from './produto.routes';

const routes = Router();


routes.use('/user',userRouter);
routes.use('/login',loginRouter);
routes.use('/smartphone',smartphoneRouter);
routes.use('/modalidade',modalidadeRouter);
routes.use('/produto',produtoRouter);

export default routes;
