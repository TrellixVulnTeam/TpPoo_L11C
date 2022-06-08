let express = require('express');
let app = express();
let ejs = require('ejs');
const { request } = require('express');
const { response } = require('express');
let bodyParser = require('body-parser');


//connection a la base de donnees slite qui se trouve dans le dossier data
const sqlite3 = require('sqlite3')
const path = require('path')
const dbName = path.join(__dirname,"data","food.sqlite")

const db = new sqlite3.Database(dbName,err=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log("connection reussi")
    }
})





let User = require('./assets/components/user');

let User = require('./assets/components/user').default;
const user = require('./assets/components/user')
const mysql = require('mysql')
const Plat = require('./assets/components/Plat')


/*Definitoin du moteur de template */
app.set('view engine', 'ejs');
/*  Bloc de declaration de nos middleWare */
/* Precison a node comment distribuer les fichiers statique */
app.use("/assets", express.static("public")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended:true
}))
/* Fin bloc */



// route pour recuperer un info du suivie
app.get('/suivieUpdate',(req,res)=>{
    const utiliseur = new user()
    utiliseur.suivieUpdate(req,res,1,5)
})

app.post('/createPlat',(req,res,next)=>{
    // const plat =new Plat(1,1,1,1)
    var returner = req.query.nom
    res.send({returner})
})
app.get('/suivieinfo',(req,res)=>{
    const utiliseur = new user()
    utiliseur.suivieInfo(req,res,1)
})

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

//function de recuperation de l'historyque de l'utilisateur
app.get('/user/historique',(req,res)=>{
    var emerson = new User();
    var userId = req.query.userId
    console.log(req.query.userId)
    var historique = emerson.userHistorique(userId,db)
    res.send({historique:historique})
})

app.post('/user/create',(req,res)=>{
    var valere = new User();
    valere.nom = req.body.nom
    valere.prenom = req.body.prenom
    valere.dateNais = req.body.dateNais
    valere.status = req.body.status
    valere.profession = req.body.profession
    valere.poids = body.poids
    console.log(req.body.name);
    console.log(req.body);
    var reponce =  valere.create(valere.nom,valere.dateNais,valere.profession,valere.status,valere.poids,db)
    res.send(reponce)
})
/** fin block **/
app.listen(3001);