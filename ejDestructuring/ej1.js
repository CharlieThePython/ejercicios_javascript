// Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades nombre y edad en variables separadas. Después crear un objeto con dichas propiedades y los valores obtenidos.

const persona = {
    nombre: "Juan",
    edad: 30,
  };
  
  const {nombre,edad} = persona;
  
  console.log(nombre);
  console.log(edad);
  