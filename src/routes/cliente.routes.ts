import { Router } from "express";
import { Connection, getConnection, getRepository } from 'typeorm';
import Cliente from "../entity/Cliente";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");

classRouter.post('/' ,async(req, res)=>{
  try{
    const repo = getRepository(Cliente);
    //const resposta = await repo.save(req.body);
    const resposta = await getConnection()
    .createQueryBuilder().insert().into(Cliente).values(req.body).execute();
    return res.status(201).json(resposta);

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/:cnpj',  async(req, res)=>{
  try{  

    const repo = getRepository(Cliente);
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
    const repo = getRepository(Cliente);
    const resposta = await repo.delete(req.params.cnpj);
    await repo.createQueryBuilder().delete().from(Cliente)
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj }).execute()
    
    return res.status(204).json('OK');
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/:cnpj/code/:codCli', async(req, res)=>{
  try{  
    const repo = getRepository(Cliente);
    const resposta = await repo.createQueryBuilder()
    .where('"cnpj" = :cnpj and "codCli" = :codCli', { cnpj:req.params.cnpj, codCli:req.params.codCli })
    .getOne();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/:cnpj/name/:nomCli', async(req, res)=>{
  try{  
    const repo = getRepository(Cliente);
    const resposta = await repo.createQueryBuilder()
    .where('"cnpj" = :cnpj and "nomCli" like :nomCli', { cnpj:req.params.cnpj, nomCli:'%' + req.params.nomCli + '%'})
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

export default classRouter;
