//LAB 11: rutas en express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const panques = ["Plátano", "Manzana", "Calabaza"];

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    console.log('Respuesta de la ruta "/ruta"');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/hola', (request, response, next) => {
    console.log('Respuesta de la ruta "/hola"');
    response.send('¡Hola! Esta es la respuesta de la ruta "/hola"'); 
});

app.use('/capybaras', (request, response, next) => {
    console.log('Respuesta de la ruta "/capybaras"');
    response.send('Respuesta de la ruta "/capybaras"'); 
});

app.get('/nuevo', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>Bienvenid@ a esta página de productos Gluten-Free</h1><main><h2>Vendemos múltiples panes, panqués y pasteles libres de gluten: </h2><p>Ingresa tu sugerencia para un producto nuevo:</p><form action="/nuevo" method="POST"><label for="nombre">Nombre del nuevo producto: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/">Regresar a la lista de productos</a></br></body></html>';
    response.send(respuesta);
});

app.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    panques.push(request.body.nombre);
    console.log(panques);
    response.status = 303;
    response.redirect('/');
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);