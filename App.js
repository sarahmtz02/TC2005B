//LAB 13: MVC
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rutas_panques = require('./routes/panques.routes');
//const rutas_labs = require('./routes/lab12.routes');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/panques', rutas_panques);
//app.use('/labs', rutas_labs);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/capybaras', (request, response, next) => {
    console.log('Respuesta de la ruta "/ruta"');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/hola', (request, response, next) => {
    console.log('Respuesta de la ruta "/hola"');
    response.send('¡Hola! Esta es la respuesta de la ruta "/hola"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);