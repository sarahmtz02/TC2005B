
const express = require('express');
const router = express.Router();
const path = require('path');

const panques = ["Plátano", "Manzana", "Calabaza"];
const marcas = ["Schar", "Ezekiel", "Pan Gabriel", "Bob's Red Mill"]


router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de productos Gluten Free</h1><main><h3>En los últimos años, el porcentaje de población con enfermedad celiaca o alergia al gluten ha crecido un 2% afectando a una gran cantidad de gente. Las personas con este diagnóstico no pueden consumir productos que usen trigo o cebada, por lo que alimentos "normales" como el pan se tienen que eliminar de la dieta de estas personas. Gluten-Free Love es un negocio familiar que empezó con el objetivo de expandir las opciones de mercado para panes y postres como pasteles y panqués para las personas con este padecimiento, por lo que todos nuestros productos son libres de gluten. Con sólo un mensaje se puede pedir uno de nuestros productos y disfrutar de ellos en poco tiempo</h3><p>Estos son nuestros productos:</p><ol>';
    for (let i in panques) {
        respuesta += '<li>' + panques[i] + '</li>';
    }
    respuesta += '</ol><a href="/panques/nuevo">Agregar un nuevo producto</a><br><br><a href="/panques/gluten">Sobre el gluten y la enfermedad celiaca</a><br><br><a href="/panques/escepticismo">Posible escepticismo</a><br><br><a href="/panques/clife">Vivir sin Gluten</a></main></body></html>';
    response.send(respuesta);
});

router.get('/nuevo', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>Bienvenid@ a esta página de productos Gluten-Free</h1><main><h2>Vendemos múltiples panes, panqués y pasteles libres de gluten: </h2><p>Ingresa tu sugerencia para un producto nuevo:</p><form action="/nuevo" method="POST"><label for="nombre">Nombre del nuevo producto: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form></br></body></html>';
    respuesta += '</ol><a href="/panques">Regresar a lista de productos</a></main></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    panques.push(request.body.nombre);
    console.log(panques);
    response.redirect('/panques');
});

router.get('/gluten', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>Sobre el Gluten</h1><main><p>La enfermedad celíaca afecta al sistema inmunitario en la que las personas no pueden consumir gluten porque daña su intestino delgado. El gluten es una proteína presente en el trigo, cebada y centeno. También puede encontrarse en vitaminas, suplementos, productos para el cabello y la piel, pasta de dientes y bálsamos labiales y puede presentarse en alimentos que no tienen gluten como tal, pero tienen rastros debido al lugar donde la empaquetaron.</p><ol>';
    respuesta += '</ol><a href="/panques">Regresar a lista de productos</a></main></body></html>';
    response.send(respuesta);
});

router.get('/escepticismo', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>Posible Escepticismo</h1><main><p>En la sociedad actual, muchas personas aún dudan de la existencia de la enfermedad celiaca. Los argumentos más comunes son "Pero si el ser humano lleva comiendo pan por miles de años y ahora todos quieren ser celiacos". Es un punto válido si no tomamos en cuenta que el porcentaje de gluten en harinas y productos en general ha crecido. En 1950, el porcentaje de gluten era de un 2% en harinas, mientras que ahora ha subido a un 93%, por lo que el cuerpo lo siente más presente.</p><ol>';
    respuesta += '</ol><a href="/panques">Regresar a lista de productos</a></main></body></html>';
    response.send(respuesta);
});

router.get('/clife', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Gluten-Free Love</title><meta charset="utf-8"></meta></head><body><h1>¿Cómo vivir sin gluten?</h1><h3>¿Eres celiac@ o quieres retirar el gluten de tu dieta? ¡Tenemos sugerencias para ti!</h3><main><p>- Cuida leer las etiquetas de cualquier alimento que compres y revisar la lista de alérgenos. Si no tiene lista de alérgenos (suelen decir "CONTIENE: " o "PUEDE CONTENER: ") no vale la pena arriesgarse.</p><p>- Siempre tener antihistamínico o tu medicamento cerca por si algo que consumes tiene gluten.</p><p>Además de nuestra empresa "Gluten-Free Love", hay algunas otras marcas que ofrecen productos libres de gluten, como lo son: </p><ol>';
    for (let i in marcas) {
        respuesta += '<li>' + marcas[i] + '</li>';
    }
    respuesta += '</ol><a href="/panques">Regresar a lista de productos</a></main></body></html>';
    response.send(respuesta);
});

module.exports = router;