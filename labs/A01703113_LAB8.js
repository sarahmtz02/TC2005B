//Sarah G. Martínez Navarro - A01703113
//LABORATORIO 8

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>LAB 8</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Hellouuu desde el servidor local</h1>');
        response.write('<main>');
        response.write('<h2>URL PARA LOS LABS: </h2>');
        response.write('<a target="_blank" href="LABS"> https:/Users/sarahmn/Desktop/Uni/Semestre 4/Construcción de Software 1-2/Labs/TC2005B/A01703113_LAB1.html</a>');
    } 
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>ERROR | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }
});

server.listen(3000);