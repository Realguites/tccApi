import { Router } from "express";
import { getRepository } from 'typeorm';
import Smartphone from "../entity/Smartphone";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

classRouter.post('/', login ,async(req, res)=>{
  try{
    //const hash = bcrypt.hashSync(req.body.password, 15);
    //req.body.password = hash;
    const repo = getRepository(Smartphone);
    //const email = req.body.email;
    const idDisp = req.body.idDisp;
    const smartphone = await repo.find({ idDisp });
    if(smartphone.length){
      return res.status(409).json("Smartphone já cadastrado!");
    }else{
      const resposta = await repo.save(req.body);
      return res.status(201).json(resposta);
    }

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/', login, async(req, res)=>{
  try{  

    const repo = getRepository(Smartphone);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.delete('/:id', login, async(req, res)=>{
  try{  
    const repo = getRepository(Smartphone);
    const resposta = await repo.delete(req.params.idDisp);
    return res.status(200).json("Smartphone " + req.params.idDisp + " excluído com sucesso!");
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
