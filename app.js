const json = require('express');
const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(express.static(__dirname + "/public"));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use('/',require('./router'));

app.listen(5000,()=>{
    console.log('Servidor activo en puesto 5000');
});
