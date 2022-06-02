let express = require('express');
let app = express();
let ejs = require('ejs');
const { request } = require('express');
const { response } = require('express');
let bodyParser = require('body-parser');
let User = require('./assets/components/user').default;
const user = require('./assets/components/user')
const mysql = require('mysql')
/*Definitoin du moteur de template */
app.set('view engine', 'ejs');
/*  Bloc de declaration de nos middleWare */
/* Precison a node comment distribuer les fichiers statique */
//autre methode de connection a la base de donnees
const myconnection = require('express-myconnection')
const optionBb = {
    host:'localhost',
    user:'root',
    password:'folong',
    port:3306,
    database:'test'
}
app.use(myconnection(mysql,optionBb,'pool'))

app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use(mysql,optionDb,'pool')
/* Fin bloc */


/* Creation des routes */
// route pour recuperer un info du suivie
app.get('/suivieUpdate',(req,res)=>{
    const utiliseur = new user()
    utiliseur.suivieUpdate(req,res,1,5)
})

app.get('/suivieinfo',(req,res)=>{
    const utiliseur = new user()
    utiliseur.suivieInfo(req,res,1)
})
app.get('/', (request, response) => {
    // response.send("JESUS SAUVE ... crois en lui");
    response.render('pages/accueil.ejs', { nom: "Bienvenu a toi Julien :)" });
});

app.get('/userConnect', (request, response) => {
       let User = require('./assets/components/user');
    User.getUser((users) => {
    response.render('pages/saveUser.ejs', { users: users });
    })
})
/* fin block */

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
 //   response.redirect('userConnect');
})
/** fin block **/
app.listen(3000);