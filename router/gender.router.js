import express from "express"
import GenderController from "../Controllers/gender.controller.js"

const GenderRouter = express.Router()
const controller = new GenderController();

GenderRouter.get('/gender', (req, res) => {
     controller.list(req, res)
})
GenderRouter.get('/gender/([0-9]*)', (req, res) => {
     controller.details(req, res)
})
GenderRouter.post('/gender', (req, res) => {
     controller.create(req, res)
})
GenderRouter.put('/gender/([0-9]*)', (req, res) => {
     controller.update(req, res)
})
GenderRouter.delete('/gender/([0-9]*)', (req, res) => {
     controller.delete(req, res)
})

export default GenderRouter