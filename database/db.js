const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'prueba',
    user: 'root',
    password: ''
});

conexion.connect((error)=>{
    if(error){
        console.log('Se ha detectado el error: '+error);
    }else{
        console.log('Conexión exitosa');
    }
})

module.exports = conexion;