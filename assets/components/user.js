let Connection = require('../../config/bdconnect');
class User {

    static InsertData(nom, prenom, cb) {
        
        console.log("Connecté a la base de donnees Utilisateurs");       
            Connection.query("INSERT INTO user SET nom =?, prenom =? ", [nom,prenom], (err,result) => {
             if (err) throw err;
                console.log('Operation perfommed successfully ...');
                cb(result)
            })
    }
    static getUser(cb) {
        Connection.query('SELECT * FROM user', (err,rows) => {
            if (err) throw err;
            cb(rows);
        })
    }

}

module.exports = User;  
   
