/*

Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las
propiedades del objeto original. excepto la propiedad con clave 'b'
*/

function excludePropertyB(originalObject) {
    // Desestructuración para extraer la propiedad 'b' y el resto de las propiedades
    const { b, ...restOfProperties } = originalObject;

    // Devuelve un nuevo objeto que contiene todas las propiedades excepto 'b'
    return restOfProperties;
}

const myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

// Llamada a la función para obtener el nuevo objeto sin la propiedad 'b'
const newObj = excludePropertyB(myObject);

// Muestra el nuevo objeto
console.log(newObj);
// Resultado: { a: 1, c: 3, d: 4 }
