import { Router } from "express";
import { getRepository } from 'typeorm';
import User from "../entity/User";


const classRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();



classRouter.post('/',async(req, res)=>{
  try {
    const email = req.body.email;
    const repo = getRepository(User);
    const user = await repo.findOne({ email });
    if(user == null){
      return res.status(400).json("Login ou senha incorretos!!!");
    }

   if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
        {
          user
        }, process.env.JWT_KEY,
        {
          expiresIn: "1h"
        })
        res.status(200).json({ msg: "Ok!!!" , token})
    } else {
        res.status(400).json({ erro: "Login ou senha incorretos!!!" })
    }
} catch (error) {
    res.status(400).json({ erros: error.message });
}

})



export default classRouter;
