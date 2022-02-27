//1: Listado de cuadrados y cubos de un número n de números

//pedir un número al usuario
const nIngresado = prompt("Ingrese un número: ");

document.write("<h2>CUADRADOS Y CUBOS</h2>");

//CORRECCIÓN: listado de números del 0 al número ingresado
document.write("<p id = parrafo1> Números del 0 al número que ingresaste: </p>");
for (let i = 0; i <= nIngresado; i++) {
  document.write("<p id = parrafo2>",i,"</p>");
}

//Cuadrados: mientras que i sea menor o igual al número ingresado, multiplicar el valor de i por sí mismo
document.write("<p id = parrafo1>Los CUADRADOS de los números del 0 al número que ingresaste son: </p>");
for (let i = 0; i <= nIngresado; i++) {
  document.write("<p id = parrafo2>",i*i,"</p>");
}

//Cubos: mientras que i sea menor o igual al número ingresado, multiplicar el valor de i por sí mismo 2 veces
document.write("<p id = parrafo1>Los CUBOS de los números del 0 al numero que ingresaste son: </p>");
for (let i = 0; i <= nIngresado; i++) {
  document.write("<p id = parrafo2>",i*i*i,"</p>");
}
document.write("<br>");

//2: Suma de 2 números aleatorios

//declarar función para números aleatorios
function aleatorio(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//declarar variables para resolver la suma
let nRandom1 = aleatorio(0,50);
let nRandom2 = aleatorio(0,50);
let Suma = nRandom1+nRandom2;

//declarar tiempo que tomará para resolver
let tiempoI = new Date;
tiempoI.getSeconds();

//prompt
const resultado = prompt("SUMA RÁPIDA: " + nRandom1 + "+" + nRandom2 + "¿Cuál es el resultado?");

//resultados y output
let tiempoF = new Date;
tiempoF.getSeconds();
let timer = tiempoF-tiempoI;
if (resultado == Suma){
  alert("¡Correcta y excelentemente bien contestado! TIEMPO: " + timer*.001 + " segundos. ¡Eres todo un genio!");
}
else {
  alert("Respuesta incorrecta. ¡Vuelve a intentarlo! TIEMPO: "+ timer*.001 + " segundos. ¡Ánimo! ¡La práctica hace al maestro!" );
}


//3: Contador de números (negativos, ceros y positivos)

const num = [7, 9, 9, 0, -1, 7, -3, -5, 0, -2, 0];

function contador(numeros){
    let neg = 0;
    let cero = 0;
    let pos = 0;

    //ciclo for: por el largo del arreglo, revisar valores
    for (let i=0; i<=numeros.length;i++){

        //si el valor es menor a 0, añadir un valor al contador de negativos
        if (numeros[i]<0){
            neg++;
        }

        //si el valor es mayor a 0, añadir un valor al contador de positivos
        else if (numeros[i]>0){
            pos++;
        }

        //si el valor es igual a 0, añadir un valor al contador de ceros
        else if (numeros[i]==0){
            cero++;
        }
    }

    //imprimir en el documento los resultados
    document.write("<h2> VALORES DEL ARREGLO (NEGATIVOS, CEROS Y POSITIVOS)</h2>");
    
    document.write("<p id = parrafo1> Negativos: </p>");
    document.write("<p id = parrafo2>",neg,"</p>");

    document.write("<p id = parrafo1> Ceros: </p>");
    document.write("<p id = parrafo2>",cero,"</p>");

    document.write("<p id = parrafo1> Positivos: </p>");
    document.write("<p id = parrafo2>",pos,"</p>");
    document.write("<br>");
}

contador(num);

//4: Promedios

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

    document.write("<h2>FUNCIÓN PROMEDIO</h2>");
    document.write("<p id=parrafo1>El promedio del arreglo es: </p>")

    //sacar promedio (dividir la suma entre los 4 valores del arreglo)
    prom = suma/4;

    document.write("<p id=parrafo2>",prom,"</p>")
}
promedio(matriz);
document.write("<br>")


//5: Números en orden inverso

//exposición del orden inverso
document.write("<h2>ORDEN INVERSO</h2>")
document.write("<p id = parrafo1> Números del número que ingresaste hasta el 0 </p>");

//mientras el valor del contador sea mayor a 0, imprimir el número Ingresado
for (let i = nIngresado; i >= 0; i--) {
  document.write("<p id = parrafo2>",i,"</p>");
}


//6: Mi problema
