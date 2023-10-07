/*
Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un
objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array,
respectivamente.
*/

function findMaxMin(arr){
    const maxMin ={
        max: Math.max(...arr),
        min: Math.min(...arr),
    }

    return `The maximum value is ${maxMin.max} and the minimum value is ${maxMin.min}`;
}

const myArray= [1,4,2,8,9,10,12,0,2,3,5];

const maxMinString = findMaxMin(myArray);

console.log(maxMinString);