exports.index = (req,res)=>{
    // res.send("le controller ainsi que la route fonstionnes parfaitement")
    res.render("../views/pages/accueil.ejs");
}

exports.plat =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/login.ejs');
};

exports.addPlate =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/addPlate.ejs');
}

exports.repas = (request, response) => {
    let data = require('./TpPoo/config/donnees')
    let donnees = data.rec(2,(plat)=>{s

             // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/plat.ejs', { plats :plat } ); 
    })
   
}