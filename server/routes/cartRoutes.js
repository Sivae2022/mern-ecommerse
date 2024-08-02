const express = require("express")
const cartRouter = express.Router();
const cartController = require("../controllers/cart")
const auth =require('../middlewares/auth')

cartRouter.post("/addCart",auth,cartController.addCart)
cartRouter.get("/getCart",auth,cartController.getCart)
cartRouter.delete("/deleteCart",auth,cartController.deleteProduct)




module.exports = {cartRouter}
