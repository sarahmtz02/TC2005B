//LAB 13: MVC

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const rutas_panques = require('./routes/panques.routes')
const rutas_lab12 = require('./routes/lab12.routes')
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/panques',rutas_panques);
app.use('/lab12', rutas_lab12);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/capybaras', (request, response, next) => {
        console.log('Respuesta de la ruta "/capybaras"');
        response.send('Respuesta de la ruta "/capybaras"'); 
    });
    
    app.use('/hola', (request, response, next) => {
        console.log('Respuesta de la ruta "/hola"');
        response.send('¡Hola! Esta es la respuesta de la ruta "/hola"'); 
    });


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404)
    response.send('Error 404. No existe esa Ruta.');
    ; //Manda la respuesta
});

app.listen(3000);