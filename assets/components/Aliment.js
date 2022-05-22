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
        alert(this.amidon)
    }
}

module.exports = Aliment