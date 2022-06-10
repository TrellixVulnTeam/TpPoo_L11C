let express = require('express');
let app = express();
// let ejs = require('ejs');
let bodyParser = require('body-parser');

//connection a la base de donnees sqlite
const sqlite3 = require('sqlite3')
const path = require('path')
const dbName = path.join(__dirname,"data","food.sqlite")
const db = new sqlite3.Database(dbName,err=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log("connection a la base donnees food reussi")
    }
})

//importation des differentes routes
const router = require('./routes/route')
const userRoute = require('./routes/userRoute')

/*Definition du moteur de template */
app.set('view engine', 'ejs');

//definition des outils a utiliser
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static("public"));
app.use(bodyParser.json());
app.use('/',router)
app.use('/user',userRoute)



app.listen(3000, () => {
    console.log('Server is running');
});
