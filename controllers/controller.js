exports.index = (req,res)=>{
    req.send({messge:"le controller ainsi que la route fonstionnes parfaitement"})
}

exports.plat =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/index.ejs');
};

exports.addPlate =  (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/addPlate.ejs');
}

exports.repas = (request, response) => {
    let data = require('./TpPoo/config/donnees')
    let donnees = data.rec(2,(plat)=>{

             // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/plat.ejs', { plats :plat } ); 
    })
   
}