//1: Listado de cuadrados y cubos de un número n de números
/*const num = prompt("Ingrese un número: ");
console.log(num);
for (let i = 1; i<=num; i++){
    console.log(i*i);
    console.log(i*i*i);
    i++;
}*/

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


//3
/*function contador(numeros){
    let neg = 0;
    let cero = 0;
    let pos = 0;
    for (let i=0; i<numeros.length;i++){
        if (numeros[i]<0){
            neg = neg+1;
        }
        else if (numeros[i]>0){
            pos = pos+1;
        }
        else{
            cero = cero+1;
        }
    }
    alert("Negativos: " + neg + "Ceros: " + cero + "Positivos: " + pos);
}
const num = [7, 9, 9, 0, -1, 7, -3, -5, 0, -2, 0];
contador(num);*/

//4


//5


//6

