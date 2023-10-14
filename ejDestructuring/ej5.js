/*
Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad.
Luego, crea un nuevo objeto llamado datosPersona y asigna las propiedades extraídas a este nuevo objeto.

*/
const persona = {
    nombre: "Luis",
    edad: 40,
    ciudad: "Ciudad Ejemplo",
  };
  
  // Desestructuración para extraer las propiedades nombre y edad
  const { nombre, edad } = persona;
  
  // Crear un nuevo objeto utilizando la sintaxis de propiedad abreviada
  const datosPersona = {
    nombre,
    edad,
  };
  
  console.log(datosPersona.edad); // Imprimirá 40
  