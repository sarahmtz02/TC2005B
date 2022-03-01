//Sarah G. Martínez Navarro - A01703113
//LABORATORIO 8

//1. función que reciba un arreglo de números y devuelva un promedio
//declarar valores de los que se va a sacar el promedio y las variables donde se guardarán los datos de las operaciones
let matriz = [[9,8],[9,7]];
let suma=0;
let prom=0;

function promedio(arreglo){

    //a lo largo del arreglo, tomar valores de x
    for(var i=0; i< arreglo.length; i++) {
        var x = arreglo[i];

        //sumar cada valor del arreglo
        for(var j=0; j< x.length; j++) {
            suma   = suma + x[j];
        }
    }

    //sacar promedio (dividir la suma entre los 4 valores del arreglo)
    prom = suma/4;
    console.log(arreglo);
    console.log(prom);

promedio(matriz);

//2. función que reciba un string y escriba el string en un archivo de texto
const texto = prompt("Ingrese su nombre: ");
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', texto);