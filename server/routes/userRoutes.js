const express = require("express")
const userRouter = express.Router();
const userContoller = require("../controllers/user")


userRouter.post("/register",userContoller.register)
userRouter.post("/login",userContoller.login)

module.exports= {userRouter}