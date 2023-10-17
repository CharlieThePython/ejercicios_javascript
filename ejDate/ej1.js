/*

Ejercicio 1: Obtener la fecha actual y mostrarla en el formato "YYYY-MM-DD".
*/

//Creamos el objeto fecha y lo asociamos a una variable

let fecha= new Date();

let year= fecha.getFullYear();
//Le sumo 1 para que me de Octubre, y no Septiembre. Ya que recordemos que empieza en 0 = Enero
let month= fecha.getMonth()+1;
let day= fecha.getDate();
console.log(`${year}-${month}-${day}`);