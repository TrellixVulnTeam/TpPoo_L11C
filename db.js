const sqlite = require('sqlite3')
const path = require('path')
const dbName = path.join(__dirname,"/data","food.sqlite")
const db =new sqlite.Database(dbName,err=>{
    if(err){
        console.log(err.message);
        console.log("connection a la bd echoue ini");
    }else{
        console.log("connection a la base de conner reusi ini");
    }
})

module.exports = db