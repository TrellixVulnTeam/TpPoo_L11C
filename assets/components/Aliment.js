const dbConnection = require('../../db')
const db = require('../../db')
class Aliment{

    name 
    valeurEnergetique
    cholesterol 
    sodium
    fibre
    lipide
    sucre
    amidon
    proteine

    constructor(name,calory,vitamine)
    {
        // On trouve des calories dans les aliments et boissons qui contiennent des glucides, des protéines et/ou des lipides.
        this.vitamine = vitamine
        this.calory = calory
        this.name = name
    }
    afficheramidon(nom){
        console.log(this.amidon)
    }
    getAliment(alimentId){
        var sql = "SELECT * FROM aliment WHERE id = ?"
        db.get(sql,[alimentId],(err,rows)=>{
            if (err) {
                console.log(err.message);
                console.log("echec de la recuperation de l'aliment");
                return false
            }
            else{
                console.log("recuperation reussi")
                return rows
            }
        })
    }
    add(Aliment){
        var sql = "INSERT INTO aliment(name,valeurEnergetique,cholesterol,sodium,fibre,lipide,sucre,amidon,proteine) VALUES(?,?,?,?,?,?,?,?,?)"
        db.run(sql,err=>{
            if(err){
                console.log(err.message);
                console.log("enregitrement du nouvelle aliment a echouer");
                return false
            }else{
                console.log("enregistrement effectuer avec success");
                return true
            }
        })
    }
    update(alimentId,Aliment){
        var sql = "Update aliment SET name = ?,valeurEnergetique = ?, cholesterol = ?, sodium =?,fibre = ?,lipide = ?,sucre=?,amidon =?,proteine?  WHERE alimentId = ?"
        db.run(sql,[Aliment.name 
            ,Aliment.valeurEnergetique
            ,Aliment.cholesterol 
            ,Aliment.sodium
            ,Aliment.fibre
            ,Aliment.lipide
            ,Aliment.sucre
            ,Aliment.amidon
            ,Aliment.proteine
            ,alimentId],err=>{
            if(err){
                console.log(err.message);
                console.log("mise ajour echouer");
                return false
            }else{
                console.log("enregistrement reussi");
                return true
            }
        })
    }
}

module.exports = Aliment