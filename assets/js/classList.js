//list of main class are going to be use inside this program
console.log("the classList")
function testClass(){
    alert("inclusion is working")
}


//vitamine sera un tableau qui contindrat un taux pour chaque vitamines . si la vitamine n'est pas 
//presente dans l'aliment alors le taux de cette vitamine est simplement de 0
//ordre des vitamines [vitamineB12,vitamineB6,vitamineD,vitamineE,vitamineC,vitamineA2]

//groupes nutritifs
//[sucre,lipides,proteins,cholesterol,glucide,fibre,calorie]


//element chimique
//[magnésium,phosphore,potassium,fer,sodium,calsium]

/* bon a savoir
1g de proteine =17kj = 4kcal
1g lipide = 38kj = 4kcal
1g glucide = 17kj = 4kcal
*/

class Aliment{

    name = "nom de l'aliment"
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


class Mineraux{
    calcium
    fer
    phosphore
    constructor(calcium,fer,phosphore){
        this.phosphore = phosphore
        this.fer  = fer
        this.calcium = calcium
    }

    valeurEnergetique(){
        return 17+38+17
    }
}


class vitamine{
    B1
    B2
    B6
    B9
    B12
    PP
    C
    D
    E
    A
    constructor(B1,B2,B6,B9,B12,PP,C,D,E,A)
    {
        this.B1=B1
        this.B2=B2
        this.B6=B6
        this.B9=B9
        this.B12=B12
        this.PP= PP
        this.C = C
        this.D = D
        this.E = E
        this.A = A
    }
}