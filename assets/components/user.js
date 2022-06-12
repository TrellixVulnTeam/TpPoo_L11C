
const db =require('../../db')

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

    constructor(){
    }
    userHistorique(userId){
        const sql = 'SELECT * FROM historique'
        console.log(userId);
        console.log(sql);
        db.all(sql,(err,result)=>{
            if(err){
                console.log(err);
            }else{

            // console.log("le resultat est",result);
            var tab = []
            result.forEach((ligne)=>{
                tab.push(ligne)
                if(ligne.historiqueId==userId){
                    console.log("la ligne a ete retrouver"+ligne.datePrise);
                }
            })
            console.log(tab);
            // return true
            }
        })
    }
    updateHistorique(nomRepas,userId,typeConsomateur){
        var curentDate = new Date()
        var datePrise = curentDate.getFullYear()
        var sql = "INSERT INTO historique (nomRepas,datePrise,userId,typeConsomateur) VALUES(?,?,?,?)"
        db.run(sql,[nomRepas,datePrise,userId,typeConsomateur],err=>{
            if(err){
                console.log(err.message)
            }else{
                console.log("les donnees on bien ete mise a jour")
            }
        })
    }
    // suivieUpdate(req,res,userId,platId){}
    create(nom,dateNais,profession,status,poids){
        var sql = "INSERT INTO user(nom,dateNais,profession,status,poids) VALUES(?,?,?,?,?)"
        db.run(sql,[nom,dateNais,profession,status,poids],err=>{
            if(err){
                console.log(err.message)
                return false
            }else{

                console.log("l'utiliateur a bien ete creer");
                return true
            }
        })
    }
    update(nom,dateNais,profession,status,poids,userId){
        var sql = "UPDATE user SET nom =?, profession=?,dateNais=?,status=?,poids=? WHERE userId= ?"
        db.run(sql,[nom,profession,dateNais,status,poids,userId],err=>{
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
    // constructor(){
        
    // }
    
    commenterRepas(plateId,commentaire,userId){
        var sql = "INSERT INTO comment(userId,platId,comment) VAUES(?,?,?)"
        db.run(sql,[userId,plateId,comment],err=>{
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
class Admin extends User{
    boquerUser(userId){
        var sql = "DELETE  FROM user WHERE userId = ?"
        db.run(sql,[userId],err=>{
            if ( err) {
                console.log(err.message);
            }else{
                console.log("supression du user reussi");
            }
        })
    }
}
var emerson = new Nutritionniste()
// emerson.update("tonton","12-07-2022","emerson","enseignant",55,1)
var folon = new Admin()
    folon.boquerUser(null)

module.exports = User;
// exports.numNutritioniste = Nutritionniste  