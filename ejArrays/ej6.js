/*
Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de
menor a mayor .
*/

/*
1. Saco el mínimo del array
2. Lo introduzco con push en otro array
3. Elimino el valor del array original
*/

/**
 * 
 * @param {Array} arr 
 * @param {int} i 
 * @param {Array} arrayNuevo 
 * @returns Array
 */
function ordenarNumeros(arr,i,arrayNuevo){
    if(i<arr.length){
        arrayNuevo.push(Math.min(...arr));
        arr = arr.filter(item => item !== Math.min(...arr));
        return ordenarNumeros(arr,i++,arrayNuevo);
    }else{
        return arrayNuevo;
    }

}

//Main Program
let i=0;
let arrayNuevo=[];
const myArray= [4,6,5,9,13,14,15,19,20,7,12,0];
console.log(`El array ordenado quedaría así\n ${ordenarNumeros(myArray,i,arrayNuevo)}`);
console.log(`Array original ${myArray}`);