import Express, { Router }  from "express"
import sequelize  from "../config/sequelize.config.js"
const InitRouter = Express.Router()

import productModel from "../models/produkt.model.js"

InitRouter.get('/init', (req, res ) =>{
     try { 
          sequelize.sync()
          res.sendStatus(200)
     }

     catch(err) {
          res.send(err)
     }
})

export default InitRouter