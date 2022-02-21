//1
const num = prompt("Ingrese un número: ");
console.log(num);
for (let i = 1; i<=num; i++){
    console.log(i*i);
    console.log(i*i*i);
    i++;
}

//????

//2


//3
function contador(numeros){
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
contador(num);

//4


//5


//6

