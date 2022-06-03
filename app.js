let express = require('express');
let app = express();
let ejs = require('ejs');
const { request } = require('express');
const { response } = require('express');
let bodyParser = require('body-parser');
let User = require('./assets/components/user').default;
/*Definitoin du moteur de template */
app.set('view engine', 'ejs');
/*  Bloc de declaration de nos middleWare */
/* Precison a node comment distribuer les fichiers statique */
app.use("/assets", express.static("public")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Fin bloc */


/* Creation des routes */
app.get('/', (request, response) => {
    
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/accueil.ejs');
});
app.get('/plat', (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/index.ejs');
});
app.get('/addPlate', (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/addPlate.ejs');
});
app.get('/repas', (request, response) => {
    let data = require('./TpPoo/config/donnees')
    let donnees = data.rec(2,(plat)=>{

             // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/plat.ejs', { plats :plat } ); 
    })
   
});
app.get('/userConnect', (request, response) => {
    response.render('pages/index.ejs');
});

app.post('/addPlate',(req,res)=>{
    let data = require('./TpPoo/config/donnees')
    data.addPlate(req.body.nom,req.body.type,req.body.conso,req.body.img,req.body.cal,(statut)=>{
        console.log(statut)
    })
    console.log(req.body.type);
    console.log(req.body)
})
/* fin block */
console.log('salut');
/**Traitement des requetes POST */
app.post('/userConnect', (request, response) => {
    



    console.log(request.body);
    if (request.body.nom === undefined || request.body.prenom == '' || request.body.prenom === undefined || request.body.nom == '') {
      response.render('pages/saveUser.ejs', { error: "OOPS :( un probleme est survenue" });
     //   response.redirect('/userConnect');

    }
    else {
       
        let User = require('./assets/components/user');
        User.InsertData(request.body.nom, request.body.prenom, () => {
            response.render('pages/saveUser.ejs', { success: "Felicitation !!! Enregistrement effectuée ..." });

        })
    }
    // recuperation et ajout des donnees du plat dans la bd
    
 //   response.redirect('userConnect');
})
/** fin block **/
app.listen(3000);