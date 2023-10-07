/*
Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento o
valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la
propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined
*/

function returnProperty(myObject){
    const property= prompt("¿Qué key quieres obtener?");

    if(myObject.hasOwnProperty(property) && myObject[property] !== null && myObject[property] !== undefined ){
        return myObject[property];
    }else{
        return undefined;
    }
}

const person ={
    userName: "Carlos",
    age: 18,
}

console.log(returnProperty(person));