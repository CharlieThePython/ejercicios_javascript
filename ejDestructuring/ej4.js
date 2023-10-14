/*
Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad nombre y apellidos
en una variable llamada nombre y apellidoPersona respectivamente.
Si la propiedad apellidos no existe en el objeto, asigna un valor predeterminado de 'Desconocido'.
*/

const persona = {
    id: 23,
    info: {
      nombre: "María",
      apellidos: undefined,
      edad: 25,
    },
  };
  
  // Desestructuración para extraer las propiedades nombre y apellidos
  let { nombre, apellidos: apellidoPersona } = persona.info;
  
  // Asignar un valor predeterminado 'Desconocido' si apellidos es null o undefined
  apellidoPersona = apellidoPersona ?? 'Desconocido';
  
  console.log(apellidoPersona); // Imprimirá 'Desconocido' en este caso
  