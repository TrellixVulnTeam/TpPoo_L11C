const food =require('../assets/components/Repas.js')
const sqlite3 = require('sqlite3')
const path = require('path')
const dbName = path.join(__dirname,"../data","food.sqlite")

const db = new sqlite3.Database(dbName,err=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log("connection a la base donnees food reussi")
    }
})

exports.DisplayFood = (req,res) => {
    let food = new food();
    food.GetAllFood((result) => {
        res.render('../views/pages/plat.ejs',{Food:result})
    })
}