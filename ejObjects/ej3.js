/*
Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario
*/

function verifyProperty(object,chain){
    if(object.hasOwnProperty(chain) && object[chain] !== null && object[chain] !== undefined){
        return true;
    }else{
        return false;
    }
}

const person ={
    userName: "Carlos",
    age: undefined,
}

const myProperty= "age";

console.log(verifyProperty(person,myProperty));