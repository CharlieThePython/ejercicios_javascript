/*
Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades primerNumero
y segundoNumero en variables separadas. Además a la vez, la variable segundoNumero se debe llamar secondNumber
*/

const numeros = {
    data: {
      primerNumero: 10,
      segundoNumero: 20,
    },
  };

  const {primerNumero, segundoNumero:secondNumber} = numeros.data;

  console.log(primerNumero);
  console.log(secondNumber);