const express = require('express')
const userRouter = express.Router()
const userController = require('./../controllers/userController')
// userRouter.use('view engine','ejs')

userRouter.post('/create',userController.createUser)
userRouter.get('/historique',userController.historique)
userRouter.post('/connect', userController.connect)
userRouter.get('/login',userController.login)
userRouter.post('/login',userController.loginCheck)
// userRouter.post('/login',userController.register)




module.exports = userRouter