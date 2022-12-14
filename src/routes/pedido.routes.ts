import { Router } from "express";
import { Connection, getConnection, getRepository } from 'typeorm';
import Pedido from "../entity/Pedido";
import ProdutoPedido from "../entity/ProdutoPedido";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");

classRouter.post('/' ,async(req, res)=>{
  try{
    const repo = getRepository(Pedido);
    let pedido: Pedido = req.body
    repo.save(pedido)
    return res.status(201).json(pedido);

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.post('/:cnpj' ,async(req, res)=>{
  try{
    const repo = getRepository(Pedido);
    if(typeof req.body?.cnpj === "undefined")
      req.body.cnpj = req?.params?.cnpj
    console.log('TESTEEEEEEEEEEEEEEEEEEeee ', req.body)
    /*const resposta = await getConnection()  
    .createQueryBuilder().insert().into(Pedido).values(new Pedido(req.body)).execute();*/
    let pedido: Pedido = req.body
    console.log(pedido)
    return res.status(201).json('resposta');

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/:cnpj', login, async(req, res)=>{
  try{  
    const repo = getRepository(Pedido);
    const resposta = await repo.createQueryBuilder()
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj })
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/:cnpj/:id', login, async(req, res)=>{
  try{  
    //console.log(req.headers.authorization)
    const repo = getRepository(Pedido);
    /*const resposta = await repo.createQueryBuilder()
    .where("cnpj = :cnpj and id = :id", { cnpj:req.params.cnpj, id:req.params.id })
    .getOne();*/
    const resposta = await repo.findOne({id:req.params.id})
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.put('/:id', login, async(req, res)=>{
  try{  
    const repo = getRepository(Pedido);
    const repo2 = getRepository(ProdutoPedido);
    const pedido = await repo.findOne({id:req.params.id})
    //console.log(pedido.produtosPedido)
   // pedido.produtosPedido.map((e)=>{
      //repo2.delete({pedidoId:req.params.id})
    //})
   // const resposta = repo.save({
    //  ...pedidoNew
    //})
    //repo2.delete(req.params.id)
    //return res.status(204).json('Ok');

    let pedidoNew: Pedido = req.body
    //pedido.id = req.params.id
    const resposta = repo.save({
      ...pedido,
      ...pedidoNew
    })
    return res.status(204).json(resposta)
    
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/',login, async(req, res)=>{
  try{  
    const repo = getRepository(Pedido);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.delete('/:cnpj/:id', login, async(req, res)=>{
  try{  
    const repo = getRepository(Pedido);
    const repo2 = getRepository(ProdutoPedido);
    repo2.delete({pedidoId:req.params.id})
    const resposta = repo.delete({id:req.params.id})
  return res.status(201).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
