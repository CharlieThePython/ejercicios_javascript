//EJERCICIO 9: ENCONTRAR EL ÍNDICE

const array=[1,2,3,3,5,6,7,8,3];

//Definimos el elemento que queremos buscar
const elemento=Number(prompt("Introduce el número que quiere buscar"));

//Buscamos el índice usando una ternaria

array.indexOf(elemento)>=0 ? indiceElemento= array.indexOf(elemento) : indiceElemento= -1;

//Salida de datos
console.log(`El índice del elemento es ${indiceElemento}`);