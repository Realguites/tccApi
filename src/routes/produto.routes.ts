import { Router } from "express";
import { Connection, getConnection, getRepository } from 'typeorm';
import Produto from "../entity/Produto";
import Quantidade from "../entity/Quantidade";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");

async function getQuantidade(cnpj, codPro){
  try{  
    const repo = getRepository(Quantidade);
    const resposta = await repo.createQueryBuilder()
    .where('"cnpj" = :cnpj and "codPro" = :codPro', { cnpj, codPro })
    .getOne();
    return resposta;
  }catch(err){
    return "Erro ao buscar quantidade para o produto " + codPro + "! CNPJ: " + cnpj + " - " + err
  }
}

classRouter.post('/', async(req, res)=>{
  try{
    const repo = getRepository(Produto);
    //const resposta = await repo.save(req.body);
    const resposta = await getConnection()
    .createQueryBuilder().insert().into(Produto).values(req.body).execute();
    return res.status(201).json(resposta);

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/:cnpj', async(req, res)=>{
  try{  
    const repo = getRepository(Produto);
    const resposta = await repo.createQueryBuilder()
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj })
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/', async(req, res)=>{
  try{  

    const repo = getRepository(Produto);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.delete('/:cnpj', async(req, res)=>{
  try{  
    const repo = getRepository(Produto);
    const resposta = await repo.delete(req.params.cnpj);
    await repo.createQueryBuilder().delete().from(Produto)
    .where("cnpj = :cnpj", { cnpj:req.params.cnpj }).execute()
    
    return res.status(204).json('OK');
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/:cnpj/code/:codPro', async(req, res)=>{
  try{  
    const repo = getRepository(Produto);
    const resposta = await repo.createQueryBuilder()
    .where('"cnpj" = :cnpj and "codPro" = :codPro', { cnpj:req.params.cnpj, codPro:req.params.codPro })
    .getOne();
    const quantidade = await getQuantidade(req.params.cnpj, req.params.codPro) as Quantidade
    if(quantidade != null)
      resposta.quantidade = quantidade
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.get('/:cnpj/name/:desPro', async(req, res)=>{
  try{  
    const repo = getRepository(Produto);
    const resposta = await repo.createQueryBuilder()
    .where('"cnpj" = :cnpj and "desPro" like :desPro', { cnpj:req.params.cnpj, desPro:'%' + req.params.desPro + '%'})
    .getMany();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

export default classRouter;
