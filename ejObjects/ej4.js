/*
Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad
con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
*/


/**
 * 
 * @param {string} str 
 * @returns object
 */
function createObjectWithString(str) {
    const myObject = {
        key: str
    };

    return myObject;
}

// Ejemplo de uso
const inputString = "Hola, soy una cadena";
const resultObject = createObjectWithString(inputString);

console.log(resultObject);

