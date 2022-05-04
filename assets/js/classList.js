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
class Aliment{

    name = "nom de l'aliment"
    constructor(name,
        calory,vitamine
        ){
        // On trouve des calories dans les aliments et boissons qui contiennent des glucides, des protéines et/ou des lipides.
        this.vitamine = vitamine
        this.calory = calory
        this.name = name
    }
}
