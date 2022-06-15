import { Router } from "express";
import { getRepository } from 'typeorm';
import User from "../entity/User";

const login = require("../middleware/login");
const classRouter = Router();

classRouter.post('/',login, async(req, res)=>{
  try{
    console.log(req)
    const repo = getRepository(User);
    const email = req.body.email;

    const usuario = await repo.find({ email });
    if(usuario.length){
      return res.status(409).json("Usuário já cadastrado!");
    }else{
      req.body.registrationDate = new Date()
      const resposta = await repo.save(req.body);
      return res.status(201).json(resposta);
    }

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/', login, async(req, res)=>{
  try{  
    const repo = getRepository(User);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.delete('/:id', login, async(req, res)=>{
  try{  
    const repo = getRepository(User);
    const resposta = await repo.delete(req.params.id);
    return res.status(200).json("Usuário " + req.params.id + " excluído com sucesso!");
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
