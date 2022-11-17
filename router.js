// const conexion = require('./database/db');

const express = require('express');
const router = express.Router();

//ruta para el index
router.get('/',(req,res)=>{
    if(req.session.loggedin == true) {
        res.render('index', {name: req.session.name});
    } else {
        res.redirect('/login');
    }
});


//ruta para nuevos usuarios
// router.get('/registro',(req,res)=>{
//     res.render('registro');
// });

// //ruta para logearse
// router.get('/login',(req,res)=>{
//     res.render('login');
// });

/* -----------------Productos--------------------- */
//ruta para mostrar datos de productos
router.get('/productos',(req,res)=>{
    req.getConnection((err, conn) => {
        conn.query('select * from producto',(error,results)=>{
            if(error){
                throw error;
            }else{
                res.render('productos',{results:results});
            }
        });
    });
});

//ruta para nuevos productos
router.get('/productoNuevo',(req,res)=>{
    res.render('productoNuevo');
});

//ruta para editar productos
router.get('/productoedit/:id',(req,res)=>{
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('select * from producto where id_prod = ?',[id],(error,results)=>{
            if(error){
                throw error;
            }else{
                res.render('productoedit',{user:results[0]});
            }
        });
    });
});

//ruta para eliminar productos
router.get('/productodelete/:id',(req,res)=>{
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('delete from producto where id_prod = ?',[id],(error, results)=>{
            if(error){
                throw error;
            }else{
                res.redirect('/productos');
            }
        });
    });
});

//ruta para nuevos usuarios
const crud = require('./controllers/crud');
// router.post('/addusuario',crud.addusuario);
//ruta para editar empleados

// router.post('/login',crud.login);


//------------------------------------------------------
//ruta para nuevos productos
router.post('/addproducto',crud.addproducto);
//ruta para actualizar empleados
router.post('/updateproducto',crud.updateproducto);

module.exports = router;