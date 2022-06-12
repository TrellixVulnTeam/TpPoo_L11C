const express = require('express')
const router = express.Router()
const User = require('../assets/components/user')
const controller = require('../controllers/controller')
const userController = require('../controllers/userController')


router.get('/',controller.index);
router.get('/accueil',controller.accueil);
router.get('/plat', controller.plat);
router.get('/addPlate',controller.addPlate)
router.get('/repas', controller.repas);
router.get('/404',controller.error)
router.post('/login',userController.loginCheck)
router.get('/login',userController.login)


module.exports = router;