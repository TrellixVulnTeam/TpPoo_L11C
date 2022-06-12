
const connector = require('../../db')
const db = connector

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
    }
    suivieUpdate(req, res, userId, platId) { }

    create(status,nom,dateNais,poids,profession,db){
       // var sql = "INSERT INTO user(nom,dateNais,profession,status,poids) VALUES(?,?,?,?,?)"
        db.run('INSERT INTO user(status,nom,dateNais,poids,profession) VALUES(?,?,?,?,?) ', [status, nom, dateNais, poids, profession], (result, err) => {
            console.log(dateNais);
            if (err)
                throw err
            else {
                console.log("l'utiliateur a bien ete creer");
                return true
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

}

class Nutritionniste extends User{
    numNutritioniste
    constructor(){
    }

    commentPlate(plateId,comment,res){
        var sql = "INSERT INTO comment(userId,platId,comment) VAUES(?,?,?)"
        db.run(sql,[this.id,plateId,comment],err=>{
            if(err){
                console.log("mis ajour du commentaire du nutritioniste reussi")
                res.render('404')
                res.end()
            }
            console.log("fin de l'enregistremert du commentaire")
            res.render('index',{message:"ajout du comentaire enregiatrer avec success"})
        })
    }
}

// exports.User = User;
// exports.numNutritioniste = Nutritionniste;

module.exports = User;
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