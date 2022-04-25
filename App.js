const express = require('express');
const misRutas = require('./routes/routes.js');
const app = express();


app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

//Home
app.use('/inicio', (request, response, next) => {
    response.render("Inicio.ejs");
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.listen(3000);
