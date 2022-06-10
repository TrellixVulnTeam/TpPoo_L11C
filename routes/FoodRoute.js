const express = require('express');
let foodController = require('../controllers/foodController');
const foodrouter = express.Router();

foodrouter.get('/', foodController.DisplayFood);