/*
Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una
propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
*/

function createObject(key,value){

    const newObject={
        key: value,
    }

    return newObject;
}

const myKey="color";
const myValue="red";

console.log(createObject(myKey,myValue));
