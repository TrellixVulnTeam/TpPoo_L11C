let connection = require('../../config/bdconnect')

class Plat{


    static rec(id,callback){
      


        console.log('it works');
        connection.query('SELECT * FROM repas WHERE id =?',[id], (err,donnee)=>{
            if (err) throw err
            
            callback(donnee)
        });
    }
    static addPlate(nom,type,conso,img,cal,callback){
        connection.query('INSERT INTO repas (nom,type,Aliment,type_consommateur,image)VALUES (?,?,?,?,?)',[nom,type,cal,conso,img],(err)=>{
            if (err) {
                throw err
            }
        })
    }
}
module.exports = Plat