const string = "Hola Hola mundo todo vaya todo por alli alli";

const palabras = string.split(" "); //Aplico el criterio para dividir las palabras. En este caso serán espacios en blanco
const contador = {};


function palabraRecursiva(arrayPalabras, contador, i) {
  if (i < arrayPalabras.length) {
    const palabra = arrayPalabras[i];

    if (contador[palabra]) {
      contador[palabra]++;
    } else {
        //Caso base
      contador[palabra] = 1;
    }

    //Caso recursivo
    return palabraRecursiva(arrayPalabras, contador, i + 1);
  } else {
    return contador;
  }
}

//Salida de datos
console.log(palabraRecursiva(palabras, contador, 0));




//UNA FORMA
/*

for (let i = 0; i < palabras.length; i++) {
  const palabra = palabras[i];
  if (contador[palabra]) {
    contador[palabra]++;
  } else {
    contador[palabra] = 1; //Por defecto, 1
  }
}

console.log(contador); */