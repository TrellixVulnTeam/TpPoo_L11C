const express = require('express')
const userRouter = express.Router()
const userController = require('./../controllers/userController')

userRouter.post('/create',userController.createUser)
userRouter.get('/historique',userController.historique)
userRouter.post('/connect', userController.connect)
userRouter.get('/login',userController.login)



module.exports = userRouter