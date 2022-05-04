
const path = require('path');
const filesystem = require('fs');
const Panque = require('../models/LAB13');


exports.inicio = (request, response, next) =>{
    console.log(request.body)
    response.render('LAB13_inicio', {panques: Panque.fetchAll()});
};

exports.LAB12 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'LAB12.html'));
};

exports.get_nuevo = (request, response, next) =>{
    console.log(request.body);
    response.render('LAB13_nuevoP',{nombre: 'Chocolate'})
};

exports.post_nuevo = (request,response,next) =>{
    console.log(request.body);
    const panque = new Panque(request.body.nombre);
    panque.save();
    filesystem.writeFileSync('Panques.txt', request.body.nombre)
    response.status(303);
    response.redirect('/panques/');
};