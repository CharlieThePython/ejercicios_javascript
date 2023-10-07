/*
Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las
claves de los objetos.
*/

function returnKeys(myObject){
    return Object.keys(myObject);
}

const person ={
    userName: "Carlos",
    age: undefined,
}

console.log(returnKeys(person));