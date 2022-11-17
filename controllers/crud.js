const conexion = require('../database/db');
exports.addusuario = (req,res)=>{
    const nom = req.body.nom;
    const ape = req.body.ape;
    let car = req.body.car;
    const user = req.body.user;
    const pass = req.body.pass;
    /*const id_car = String(conexion.query('select id_cargo from cargo where cargo.nombre = ?', {nombre:car},(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registro');
        }
    }));*/ 
    if(car == "Vendedor"){
        car = "001";
    }else{
        car = "002";
    }

    conexion.query('insert into usuarios set ?',{nombre:nom,
    apellido:ape,id_cargo:car,username:user,password:pass},(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registro');
        }
    });
}

exports.login = (req,res)=>{
    const user = req.body.username;
    const pass = req.body.password;
    
    const usuario = conexion.query('SELECT * FROM usuarios WHERE username = ?',{username:user},(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/login');
        }

        // if(userdata.length > 0) {
        //     userdata.forEach(element => {
        //         if(user != element.password) {
        //             res.render('login.ejs', console.log('Contraseña incorrecta'));
        //         }else {

        //             req.session.loggedin = true;
        //             req.session.name = element.username;

        //             res.redirect('/');
        //         }
        //     });
        // }else{
        //     res.render('login.ejs', console.log('Usuario no existe'));
        // }
    });

    // usuario.forEach(element => {
        
    //     if(pass != element.password) {
    //         res.render('login.ejs', console.log('Contraseña incorrecta'));
    //     }else{
    //         res.redirect('/');
    //     }
    // });
}

exports.updatealumnos = (req,res) =>{
    const cod = req.body.cod;
    const ape = req.body.ape;
    const nom = req.body.nom;
    const dir = req.body.dir;
    const telef = req.body.telef;
    const cod_carrera = req.body.cod_carrera;
    conexion.query('update alumnos set ? where IdAutor = ?',[{IdAutor:cod,
        Apellidos:ape,Nombres:nom,Direccion:dir,Telefono:telef,IdCarrera:cod_carrera},cod],(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/mr_alumnos');
        }
    });
}
