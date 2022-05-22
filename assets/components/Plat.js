const Aliment = require('./Aliment')

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
}



module.exports = Plat