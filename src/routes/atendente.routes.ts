import { Router } from "express";
import { Connection, getConnection, getRepository } from 'typeorm';
import Atendente from "../entity/Atendente";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");

classRouter.post('/', async(req, res)=>{
  try{
    const repo = getRepository(Atendente);
    //const resposta = await repo.save(req.body);
    const resposta = await getConnection()
    .createQueryBuilder().insert().into(Atendente).values(req.body).execute();
    return res.status(201).json(resposta);

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/:cnpj', async(req, res)=>{
  try{  

    const repo = getRepository(Atendente);
    const resposta = await repo.createQueryBuilder()
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj })
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.delete('/:cnpj', async(req, res)=>{
  try{  
    const repo = getRepository(Atendente);
    const resposta = await repo.delete(req.params.cnpj);
    await repo.createQueryBuilder().delete().from(Atendente)
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj }).execute()
    
    return res.status(204).json('OK');
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
