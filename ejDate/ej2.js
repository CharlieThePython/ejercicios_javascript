/*
Ejercicio 2: Crear una función que tome como parámetro una fecha de nacimiento y calcule la edad actual de una persona.
*/

function getAge(bornDate){
    let actualDate= new Date();
    return actualDate.getFullYear()-bornDate.getFullYear();
}

let year=Number(prompt("Put the year you were born"));
let month=(Number(prompt("Put the month you were born")))-1;
let day=Number(prompt("Put the day you were born"));
let bornDate= new Date(year,month,day);
console.log(`You are ${getAge(bornDate)} years old`);

