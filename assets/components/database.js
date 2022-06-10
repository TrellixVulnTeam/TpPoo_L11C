const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('food', 'user', 'pass', {
    dialect: 'sqlite',
    host: '../../data/food.sqlite'
});

module.exports = sequelize;