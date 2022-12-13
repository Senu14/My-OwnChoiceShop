import express from "express"
import ReviwController from "../Controllers/reviw.controller.js"

const ReviwRouter = express.Router()
const controller = new ReviwController

ReviwRouter.get('/reviw', (req, res) => {
     controller.list(req, res)
})
ReviwRouter.get('/reviw/([0-9]*)', (req, res) => {
     controller.details(req, res)
})
ReviwRouter.post('/reviw', (req, res) => {
     controller.create(req, res)
})
ReviwRouter.put('/reviw/([0-9]*)', (req, res) => {
     controller.update(req, res)
})
ReviwRouter.delete('/reviw/([0-9]*)', (req, res) => {
     controller.delete(req, res)
})

export default ReviwRouter