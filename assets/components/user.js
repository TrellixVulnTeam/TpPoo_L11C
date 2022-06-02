let Connection = require('../../config/bdconnect');
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const optionBb = {
    host:'localhost',
    user:'root',
    password:'folong',
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

    suivieUpdate(req,res,userId,platId){
        req.getConnection((error,connection)=>{
            if(error){
                console.log(error)
            }else{
                connection.query("INSERT INTO suivie (platId,userId) VALUE(?,?)",[platId,userId],(error,result)=>{
                    if(error){
                        console.log(erreur)
                    }else{
                        res.status(200).json({result})
                    }
                })
            }
        })
    }

    suivieInfo(req,res,userId){
        req.getConnection((error,connection)=>{
            if(error){
                console.log(error)
            }else{
                connection.query("SELECT * from suivie WHERE id =?",[userId],(error,result)=>{
                    if(error){
                        console.log(erreur)
                    }else{
                        res.status(200).json({result})
                    }
                })
            }
        })
    }
}

class nutritionniste extends User{
    numNutritioniste
}

module.exports = User;  
   
