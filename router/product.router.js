import express from 'express'
import productController from '../Controllers/product.controller.js'

const productRouter = express.Router()
const controller = new productController

productRouter.get('/product', (req, res) => {
    controller.list(req, res)
})
productRouter.get('/product/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
productRouter.post('/product', (req, res) => {
    controller.create(req, res)
})
productRouter.put('/product/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
productRouter.delete('/product/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})
export default productRouter
