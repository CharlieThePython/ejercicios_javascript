/*
Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
*/

/**
 * 
 * @param  {...array} arr 
 * @returns array
 */
function unirArrays(...arr){
    const arrayNuevo=[];
    return arrayNuevo.concat(...arr);
}

//MAIN DEL PROGRAMA
const array= [1,2,3];
const array2= [4,5,6];
const array3= [7,8,9];

//Salida de Datos
console.log(`Array nuevo con todos los arrays previos\n ${unirArrays(array,array2,array3)}`);