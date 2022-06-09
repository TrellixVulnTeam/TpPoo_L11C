const express = require('express')
const router = express.Router()
const User = require('../assets/components/user')
const controller = require('../controllers/controller')


router.get('/',controller.index);
router.get('/plat',controller.plat)
router.get('/addPlate',controller.addPlate)
router.get('/repas', controller.repas);
router.get('/404',controller.error)
router.post('')

module.exports = router;