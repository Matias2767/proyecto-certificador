const conexion = require('../database/db');
exports.addalumnos = (req,res)=>{
    const cod = req.body.cod;
    const ape = req.body.ape;
    const nom = req.body.nom;
    const dir = req.body.dir;
    const telef = req.body.telef;
    const cod_carrera = req.body.cod_carrera;
    conexion.query('insert into alumnos set ?',{IdAutor:cod,
    Apellidos:ape,Nombres:nom,Direccion:dir,Telefono:telef,IdCarrera:cod_carrera},(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/mr_alumnos');
        }
    });
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
//----------------------------------------------------
exports.addproducto = (req,res)=>{
    const cod = req.body.cod;
    const nom = req.body.nom;
    const pre = req.body.pre;
    const stock = req.body.stock;
    conexion.query('insert into producto set ?',{id_prod:cod,producto:nom,precio:pre,stock:stock},(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/productos');
        }
    })
}
exports.updateproducto = (req,res)=>{
    const cod = req.body.cod;
    const nom = req.body.nom;
    const pre = req.body.pre;
    const stock = req.body.stock;
    conexion.query('update producto set ? where id_prod = ?',[{id_prod:cod,producto:nom,precio:pre,stock:stock},cod],(error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/productos');
        }
    });    
}
    
