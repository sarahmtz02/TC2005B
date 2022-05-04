
const Usuario = require('../models/LAB14');

exports.get_login = (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario
    });
};

exports.login = (request, response, next) => {
    if(Usuario.login(request.body.nombre,request.body.passwd)){
        request.session.usuario = request.body.nombre;
        response.redirect('/panques/');
    } else{
        response.redirect('users/login');
    }
};

exports.logout = (request,response,next) =>{
    request.session.destroy(()=>{
        response.redirect('/users/login')
    });
};