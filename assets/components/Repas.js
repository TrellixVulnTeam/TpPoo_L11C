const sqlite3 = require('sqlite3');
let database = new sqlite3.Database('../../data/food.sqlite',(err) => {
    if (err) throw err;
    console.log('Database is food.sqlite is open...');
});
   /*    database.run('INSERT INTO repas(repasId,nom,typeConsommateur,platPrincipal,complement,recette)', [3,'Bongo', 'Vegan', 'Bongo', 'Riz,Plantain', 'Preparation au feu de bois , tomate necessaire'], (result, err) => {
            if (err) throw err;
            console.log("Data inserted");
       })
database.each('SELECT * FROM repas', (err, data) => {
    if (err) throw err;
    console.log(data.repasId,data.nom);
})
    */

class Repas {
    nom;
    typeconso;
    platprin;
    complement;
    recette;
    id;
    valeurE;
    constructor(id,nom,typeconso,platprin,complement,recette,valeurE) {
        this.id = id
        this.nom = nom;
        this.typeconso = typeconso;
        this.platprin = platprin;
        this.complement = complement;
        this.recette = recette;
        this.valeurE = valeurE;
    }

     InsertFood(cb) {
            database.run('INSERT INTO repas(repasId,nom,typeConsomateur,platPrincipal,complement,recette,valeurE)', [this.id,this.nom,this.typeconso,this.platprin,this.complement,this.recette,this.valeurE], (result, err) => {
            if (err) throw err;
                console.log("Food inserted into Database Food.sqlite");
                cb(result);
       })
     }
    
    GetAllFood(cb) {
        database.all('SELECT * FROM repas', (result, err) => {
            if (err)
                throw err
            cb(result);
        })
    }

    GetSpecificFood(id,cb) {
        database.get('SELECT * FROM repas WHERE repasId = ?', [id], (result, err) => {
            if (err)
                throw err
            cb(result);
        })
    }
    ADDcolumValeurE() {
        database.run('ALTER TABLE `repas` ADD ` ValeurE` int(11)',(result,err)=>{

            if (err) throw err;
            console.log('Colonne Ajoutee avec sucess');
        });
    }
    
    UpdateAspecificFood(id, nom, typeconso, platprin, complement, recette,ValeurE,cb) {
        database.run('UPDATE TABLE repas SET nom= ?,typeConsomateur=?,platPrincipal=?,complement=?,recette=?,ValeurE=? WHERE repasId = ?', [nom, typeconso, platprin, complement, recette, ValeurE, id], (result, err) => {
            if (err) throw err;
            console.log('Mise a jour reussi');
            cb(result);
        })
    }

    DeleteFood(id,cb){
        database.run('DELETE FROM repas WHERE repasId = ?', [id], (result, err) => {
            if (err) throw err;
            console.log('suppression effectue ...')
            cb(result);
        })

    }


}

let food = new Repas('3', "Igname blanc", "Vegetarien", "igname", "  m", "Ecraser les condiments et bouillies dans avec l'igname");
console.log(food.recette);
/*food.InsertFood((result) => {
    console.log(result);
});
*/
food.GetAllFood((result) => {
    console.log(result);
})
food.UpdateAspecificFood('2', 'PilePomme', 'all', 'pommes et Haricots', 'Aucun', 'Huile rouge+pommes+Haricot+sel', '123', (result) => {
    console.log('result is being charge');
});

food.GetAllFood((result) => {
    console.log(result);
})
food.DeleteFood('3', (result) => {
    console.log("suppression Reussie...");
})
//food.ADDcolumValeurE();








/**Type de requete a effectuer avec sqlite 3
 * //SELECT
    .get: recuperer la premiere ligne de notre requete Select
    .all/recupere toutes les lignes
    .each // recupere les lignes une par une  et pouvoir traiter chaque ligne avec une CallBack function pour pouvoir traiter chaque ligne
//INSERT, CREATE
.run//

 */

// class Repas{

//     static InsertFood(nom,typeconso,platprin,complement,recette) {
//         database.run('INSERT INTO repas(nom,typeConsommateur,platPrincipal,complement,recette)', [nom, typeconso, platprin, complement, recette], (result, err) => {
//             if (err) throw err;
//             console.log("Data inserted");
//     })
//     }
// }

// let Bongo = new Repas();
// Bongo.InsertFood('Bongo', 'Vegan', 'Bongo', 'Riz,Plantain', 'Preparation au feu de bois , tomate necessaire');






































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