let mysql = require('mysql');

let Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'utlisateurs'
})

Connection.connect();
/*Connection.connect(function (err) {
    if (err) throw err
    Connection.query('CREATE DATABASE utilisateurs ', (err) => {
        if (err) throw err
        console.log('base de donnes cree')
    })
});*/

module.exports = Connection;