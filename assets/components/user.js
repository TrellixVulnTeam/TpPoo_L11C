let Connection = require('../../config/bdconnect');
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const optionBb = {
    host:'locahost',
    user:'root',
    password:'',
    port:3306,
    database:'test'
}
// class User {

//     static InsertData(nom, prenom, cb) {
        
//         console.log("Connecté a la base de donnees Utilisateurs");       
//             Connection.query("INSERT INTO user SET nom =?, prenom =? ", [nom,prenom], (err,result) => {
//              if (err) throw err;
//                 console.log('Operation perfommed successfully ...');
//                 cb(result)
//             })
//     }

//     static getUser(cb) {
//         Connection.query('SELECT * FROM user', (err,rows) => {
//             if (err) throw err;
//             cb(rows);
//         })
//     }

// }

class User{
    nom
    prenom
    etatSanter
    profession
    dateNais
    imc
    suivie
    password
    id
    email

    updateSuivie(userId,platId,dateConsomation){
        const sql = "INSERT INTO suivie"

    }
}

class nutritionniste extends User{
    numNutritioniste
}

module.exports = User;  
   
