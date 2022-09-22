import { Router } from "express";
import { getConnection, getRepository } from 'typeorm';
import Smartphone from "../entity/Smartphone";

const login = require("../middleware/login");
const classRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Smartphone);
    const idDisp = req.body.idDisp;
    const smartphone = await repo.find({ idDisp });
    if (smartphone.length) {
      return res.status(409).json("Smartphone já cadastrado!");
    } else {
      const queryCompanyName = await repo.findOne({
        cnpj: req.body.cnpj,
      })
      let companyName = 'Empresa não cadastrada no ERP'
      if(typeof req.body.nomLoj === "undefined")
        companyName =  queryCompanyName?.nomLoj
      
      if(!req.body?.nomLoj)
        req.body.nomLoj = companyName
      
      const resposta = await repo.save(req.body);
      return res.status(201).json(resposta);
    }

  } catch (err) {
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.get('/', async (req, res) => {
  try {

    const repo = getRepository(Smartphone);
    const resposta = await repo.find();
    return res.status(200).json(resposta);
  } catch (err) {
    return res.status(400).json("Erro ao executar " + err);
  }

})

classRouter.delete('/:idDisp', async (req, res) => {
  try {
    const repo = getRepository(Smartphone);
    const resposta = await repo.delete(req.params.idDisp);
    return res.status(200).json("Smartphone " + req.params.idDisp + " excluído com sucesso!");
  } catch (err) {
    return res.status(400).json("Erro ao executar " + err);
  }

})


classRouter.get('/:cnpj/:idDisp', async (req, res) => {
  try {
    const repo = getRepository(Smartphone);
    const data = await repo.findOne({
      idDisp: req.params.idDisp,
      cnpj: req.params.cnpj,
    })
    return res.status(200).json(data);

  } catch (err) {
    return res.status(400).json("Erro ao executar " + err);
  }
})

classRouter.put('/:idDisp', async (req, res) => {
  try {
    const repo = getRepository(Smartphone);
    if (req.body.status) {
      await getConnection()
        .createQueryBuilder()
        .update(Smartphone)
        .set({
          status: req.body.status
        })
        .where("idDisp = :idDisp", { idDisp: req.params.idDisp })
        .execute();
    } else {
      if (req.body.autCgm) {
        await getConnection()
          .createQueryBuilder()
          .update(Smartphone)
          .set({
            autCgm: req.body.autCgm
          })
          .where("idDisp = :idDisp", { idDisp: req.params.idDisp })
          .execute();
      }
    }
    return res.status(204).json();


  } catch (err) {
    return res.status(400).json("Erro ao executar " + err);
  }
})




export default classRouter;
