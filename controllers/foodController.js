let Food = require('../assets/components/Repas');
const sqlite3 = require('sqlite3');
const path = require('path')
// Donc toutes les dependances aui sont dans Repas.js doivent etre appele au niveau de son controller

let database = new sqlite3.Database('../data/food.sqlite',(err) => {
    if (err) throw err;
    console.log('Database is food.sqlite is open...');
});

exports.DisplayFood = (req,res) => {
    let food = new Food();
    food.GetAllFood((result) => {
        res.render('../views/pages/plat.ejs',{Food:result})
    })
}