import { Router } from "express";
import { Connection, getConnection, getRepository } from 'typeorm';
import Pedido from "../entity/Pedido";

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

classRouter.get('/',login, async(req, res)=>{
  try{  

    const repo = getRepository(Pedido);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.delete('/:cnpj', login, async(req, res)=>{
  try{  
    const repo = getRepository(Pedido);
    const resposta = await repo.delete(req.params.cnpj);
    await repo.createQueryBuilder().delete().from(Pedido)
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj }).execute()
    
    return res.status(204).json('OK');
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
