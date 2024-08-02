const express = require("express")
const orderRouter = express.Router()
const orderController = require("../controllers/order")
const auth = require('../middlewares/auth')


orderRouter.post('/add',auth,orderController.addOrder)
orderRouter.get('/get',auth,orderController.getOrder)


module.exports = {orderRouter}