function randomArray(limite){
    var tableau = []
    while(tableau.length<=5){
        var x = Math.floor(Math.random() * (limite)) + 1;
        var z = false
        console.log(x);
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i]==x) {
                // tableau.push(x)
                z = true
                // break
            }
        }

        if (z==false) {
            tableau.push(x)
        }
    }
    console.log("les valeurs choisi sont : "+tableau);
    return tableau
}
console.log("test");
randomArray(9)