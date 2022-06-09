const sqlite3 = require('sqlite3');
let database = new sqlite3.Database('../../data/food.sqlite',(err) => {
    if (err) throw err;
    console.log('Database is food.sqlite is open...');
});

/**Type de requete a effectuer avec sqlite 3
 * //SELECT 
    .get: recuperer la premiere ligne de notre requete Select
    .all/recupere toutes les lignes
    .each // recupere les lignes une par une  et pouvoir traiter chaque ligne avec une CallBack function pour pouvoir traiter chaque ligne
//INSERT, CREATE
.run//

 */

class Repas{

    static InsertFood(nom,typeconso,platprin,complement,recette) {
        database.run('INSERT INTO repas(nom,typeConsommateur,platPrincipal,complement,recette)', [nom, typeconso, platprin, complement, recette], (result, err) => {
            if (err) throw err;
            console.log("Data inserted");
    })
    }
}

let Bongo = new Repas();
Bongo.InsertFood('Bongo', 'Vegan', 'Bongo', 'Riz,Plantain', 'Preparation au feu de bois , tomate necessaire');






































// /** Repas de La base de donnees */
// const sequelize = require('database');
// sequelize.sync().then(() => {
//     console.log('Sqlite Database is running from sequelize module');
// });

// const { Model } = require('sequelize');

// class Repas extends Model{
//     static createfood() {
         
//      }

// }