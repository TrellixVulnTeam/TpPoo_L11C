const Aliment = require('./Aliment')
const db = require('../../db')
class Plat extends Aliment{
    nom
    type
    Aliment
    qualite
    constructor(nom,type,Aliment,qualite){
        this.Aliment = Aliment
        this.nom = nom
        this.type = type
        this.qualite = qualite
    }
    create(plat){
        var sql = "INSERT INTO repas (nom,type,aliment,qualiter) VALUES(?,?,?,?)"
        db.run(sql,[],err=>{
            if(err){
                console.log(err.message)
                console.log("creation du plat echouer");
                return false
            }else{
                console.log("creation du play reussi ");
                return true
            }
        })
    }
}



module.exports = Plat