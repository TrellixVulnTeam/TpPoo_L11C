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


exports.index = (req,res)=>{
    res.render('index.ejs');
}

exports.plat =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/login.ejs');
};

exports.addPlate =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('addPlate.ejs');
}

exports.repas = (request, response) => {
    let data = require('./TpPoo/config/donnees')
    let donnees = data.rec(2, (plat) => {
        s
        var sql = "SELECT * FROM plat"

        data = db.all(sql, [], (err, result) => {
            if (err) {
                console.log(err.messge);
                //  response.send({erreur:err.messge})
                response.render('404.ejs', { plats: result });

            } else {
                //  response.send({data:result})

                // response.send("JESUS SAUVE ... crois en lui");
                response.render('plat.ejs', { plats: plat });
            }
        })
    })
    }

exports.error = (request, response) => {
            // response.send("JESUS SAUVE ... crois en lui");
            response.render('404.ejs');
        }
