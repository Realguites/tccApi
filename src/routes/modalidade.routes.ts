import { Router } from "express";
import { getRepository } from 'typeorm';
import Modalidade from "../entity/Modalidade";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

classRouter.post('/', login ,async(req, res)=>{
  try{
    const repo = getRepository(Modalidade);
    const resposta = await repo.save(req.body);
    return res.status(201).json(resposta);

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/:cnpj', login, async(req, res)=>{
  try{  

    const repo = getRepository(Modalidade);
    const resposta = await repo.createQueryBuilder()
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj })
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.delete('/:cnpj', login, async(req, res)=>{
  try{  
    const repo = getRepository(Modalidade);
    const resposta = await repo.delete(req.params.cnpj);
    await repo.createQueryBuilder().delete().from(Modalidade)
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj }).execute()
    
    return res.status(204).json('OK');
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
