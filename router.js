const conexion = require('./database/db');

const express = require('express');
const router = express.Router();

//ruta para el index
router.get('/',(req,res)=>{
    res.render('index');
});

/* -----------------ALUMNOS--------------------- */

//ruta para mostrar datos de alumnos
router.get('/mr_alumnos',(req,res)=>{
    conexion.query('select * from alumnos',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('mr_alumnos',{results:results});
        }
    });
});

//ruta para nuevos usuarios
router.get('/registro',(req,res)=>{
    res.render('registro');
});

//ruta para editar alumnos
router.get('/mr_alumnosedit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from alumnos where IdAutor=?',[id],(error,results)=>{
        if(error){
            throw (error);
        }else{
            res.render('mr_alumnosedit', {user:results[0]});
        }
    });
});

//ruta para eliminar empleados
router.get('/mr_alumnosdelete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from alumnos where IdAutor=?',[id],(error)=>{
        if(error){
            throw (error);
        }else{
            res.redirect('/mr_alumnos');
        }
    });
});

/* -----------------Productos--------------------- */
//ruta para mostrar datos de productos
router.get('/productos',(req,res)=>{
    conexion.query('select * from producto',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('productos',{results:results});
        }
    });
});

//ruta para nuevos productos
router.get('/productoNuevo',(req,res)=>{
    res.render('productoNuevo');
});

//ruta para editar productos
router.get('/productoedit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from producto where id_prod = ?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('productoedit',{user:results[0]});
        }
    });
});

//ruta para eliminar productos
router.get('/productodelete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from producto where id_prod = ?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/productos');
        }
    });
});

//ruta para nuevos usuarios
const crud = require('./controllers/crud');
router.post('/addusuario',crud.addusuario);
//ruta para editar empleados
router.post('/updatealumnos',crud.updatealumnos);

router.post('/login',crud.login);


//------------------------------------------------------
//ruta para nuevos productos
router.post('/addproducto',crud.addproducto);
//ruta para actualizar empleados
router.post('/updateproducto',crud.updateproducto);

module.exports = router;