//LAB 12: HTML dinámico
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutas_panques = require('./routes/panques.routes');
const res = require('express/lib/response');
app.use('/panques', rutas_panques);

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

app.get('/milagro', function(req,res){
    res.sendFile('LAB12.html')
});

app.use((request, response, next) => {
    response.status(404).render("Error404"); //Manda la respuesta
});

app.listen(3000);