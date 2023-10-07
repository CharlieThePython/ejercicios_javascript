/*

Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga
propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el
objeto.

*/

function createObject(keys, values) {
    let myObject = {};

    for (let i = 0; i < keys.length; i++) {
        myObject[keys[i]] = values[i];
    }

    return myObject;
}

const myKeys = ["name", "age", "job"];
const myValues = ["Charles", 22, "programmer"];

console.log(createObject(myKeys, myValues));