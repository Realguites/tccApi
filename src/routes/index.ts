import { Router } from 'express';
import userRouter from './user.routes';
import loginRouter from './login.routes';
import smartphoneRouter from './smartphone.routes';
import modalidadeRouter from './modalidade.routes';
import produtoRouter from './produto.routes';
import quantidadeRouter from './quantidade.routes';
import clienteRouter from './cliente.routes';
import atendenteRouter from './atendente.routes';
import pedidoRouter from './pedido.routes';


const routes = Router();


routes.use('/user',userRouter);
routes.use('/login',loginRouter);
routes.use('/smartphone',smartphoneRouter);
routes.use('/modalidade',modalidadeRouter);
routes.use('/produto',produtoRouter);
routes.use('/quantidade',quantidadeRouter);
routes.use('/cliente',clienteRouter);
routes.use('/atendente',atendenteRouter);
routes.use('/pedido',pedidoRouter);

export default routes;
