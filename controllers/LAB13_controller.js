
const path = require('path');
const filesystem = require('fs');
const Panque = require('../models/LAB17');

exports.inicio = (request, response, next) =>{
    //console.log(request.body)
    console.log(request.cookies);
    Panque.fetchAll()
    .then(([rows, fieldData]) =>{
        console.log(rows);
        response.render('LAB13_inicio', {
            panques: rows,
            ultimo_panque: request.cookies.ultimo_panque ? request.cookies.ultimo_panque: '',
            usuario: request.session.usuario ? request.session.usuario : ''
        });
    })
    .catch(err => {
        console.log(err);
    });};

exports.LAB12 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'LAB12.html'));
};

exports.get_nuevo = (request, response, next) =>{
    console.log(request.body);
    response.render('LAB13_nuevoP',{nombre: 'Chocolate'})
};

exports.post_nuevo = (request,response,next) =>{
    console.log(request.body);
    const Panque = new Panque(request.body.nombre, request.body.descripcion,request.body.imagen);
    Panque.save()
    .then(()=> {
        response.setHeader('Set-Cookie','ultimo_panque='+Panque.nombre)
    request.cookies.ultimo_panque=Panque.nombre;
    response.redirect('/panques');
    }).catch(err => console.log(err))
};