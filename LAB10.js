
const panques = ["Plátano", "Manzana", "Calabaza"];

const http = require('http');
 
 const server = http.createServer( (request, response) => {
    
    //Página principal
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido a este sitio de productos Gluten Free</h1>');
        response.write('<main>');
        response.write('<h2>En los últimos años, el porcentaje de población con enfermedad celiaca o alergia al gluten ha crecido un 2% afectando a una gran cantidad de gente. Las personas con este diagnóstico no pueden consumir productos que usen trigo o cebada, por lo que alimentos "normales" como el pan se tienen que eliminar de la dieta de estas personas. Gluten-Free Love es un negocio familiar que empezó con el objetivo de expandir las opciones de mercado para panes y postres como pasteles y panqués para las personas con este padecimiento, por lo que todos nuestros productos son libres de gluten. Con sólo un mensaje se puede pedir uno de nuestros productos y disfrutar de ellos en poco tiempo.</h2>');
        response.write('<p>Estos son nuestros productos:</p>');
        response.write('<ol>');
        for (let i in panques){
            response.write('<li>' + panques[i] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="nuevo">Agregar una sugerencia a la lista</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    }

    //Nuevo Producto (sugerencia)
    else if (request.url === '/nuevo' && request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head>');
        response.write('<body>')
        response.write('<h1>Bienvenido a este sitio de productos Gluten Free</h1>');
        response.write('<main>');
        response.write('<h2>¡Agrega una sugerencia de producto!</h2>');
        response.write('<p>Ingresa los datos del nuevo producto:</p>');
        response.write('<form action="/nuevo" method="POST">');
        response.write('<label for="nombre">Nombre del nuevo producto: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de productos</a>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/nuevo' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
    }

    



 })