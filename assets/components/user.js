let Connection = require('../../config/bdconnect');
const mysql = require('mysql')
const path = require('path')
// const db = sq
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
    status
    id
    email

<<<<<<< HEAD
    constructor(){

    }
    userHistorique(userId,db){
        var sql = "SELECT * FROM historique WHERE userId = ?"
        db.all(sql,[userId],(err,result)=>{
            if(err){
                console.log(err.message)
                return (err)
            }
            console.log(result)
            return result
        })
    }
    updateHistorique(userId,platId,db){
        var curentDate = new Date()
        var datePrise = curentDate.getFullYear()
        var sql = "INSERT INTO historique(platId,datePrise,userId) VALUES(?,?,?)"
        db.run(sql,[platId,datePrise,userId],err=>{
            if(err){
                console.log(err.message)
            }else{
                console.log("les donnees on bien ete mise a jour")
            }
        })
=======
    suivieUpdate(req,res,userId,platId){
                
>>>>>>> 3fbe19487a1ef72aa0f285962fc78b3680f09068
    }
    create(nom,dateNais,profession,status,poids,db){
        var sql = "INSERT INTO user(nom,dateNais,profession,status,poids) VALUES(?,?,?,?,?)"
        db.run(sql,[nom,dateNais,profession,status,poids],err=>{
            if(err){
                console.log(err.message)
                return false
            }else{
<<<<<<< HEAD
                console.log("l'utiliateur a bien ete creer");
                return true
=======
                connection.query("SELECT * from suivie WHERE id =?",[userId],(error,result)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.status(200).json({result})
                    }
                })
>>>>>>> 3fbe19487a1ef72aa0f285962fc78b3680f09068
            }
        })
    }
    update(nom,dateNais,prenom,profession,status,poids,db){
        var sql = "UPDATE user SET nom =?, prenom =?,profession=?,dateNais=?,status=?,poids=?"
        db.run(sql,[nom,prenom,profession,dateNais,status,poids],err=>{
            if(err){
                console.log(err.message)
                return false
            }else{
                console.log("mise ajour du nouvelle utilisateur effectuer avec success")
                return true
            }
        })
    }
    // suivieUpdate(req,res,userId,platId){
    //     req.getConnection((error,connection)=>{
    //         if(error){
    //             console.log(error)
    //         }else{
    //             connection.query("INSERT INTO suivie (platId,userId) VALUE(?,?)",[platId,userId],(error,result)=>{
    //                 if(error){
    //                     console.log(erreur)
    //                 }else{
    //                     res.status(200).json({result})
    //                 }
    //             })
    //         }
    //     })
    // }

    // suivieInfo(req,res,userId){
    //     req.getConnection((error,connection)=>{
    //         if(error){
    //             console.log(error)
    //         }else{
    //             connection.query("SELECT * from suivie WHERE id =?",[userId],(error,result)=>{
    //                 if(error){
    //                     console.log(erreur)
    //                 }else{
    //                     res.status(200).json({result})
    //                 }
    //             })
    //         }
    //     })
    // }

}

class nutritionniste extends User{
    numNutritioniste
}

module.exports = User;  
   
