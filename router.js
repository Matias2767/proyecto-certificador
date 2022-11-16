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

//ruta para nuevos alumnos
router.get('/mr_alumnosNuevo',(req,res)=>{
    res.render('mr_alumnosNuevo');
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

//ruta para nuevos empleados
const crud = require('./controllers/crud');
router.post('/addalumnos',crud.addalumnos);
//ruta para editar empleados
router.post('/updatealumnos',crud.updatealumnos);


module.exports = router;