//DEBUG

console.log("Archivo de modulos.js");

/*
¿Por qué usar módulos?
Básicamente para tener nuestro código mucho más encapsulado y mejor definidos
*/

//export e import
import saludar, {PI,usuario,password} from "./constantes.js";
import {aritmetica} from "./aritmetica.js";

let radioCirculo= PI*2;

console.log(radioCirculo,usuario,aritmetica.multiplicar(2,4,5));
saludar();