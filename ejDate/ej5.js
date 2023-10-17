/*
Ejercicio 5: Crear una función que tome dos fechas como parámetros y devuelva la diferencia en días entre ellas.
*/
function getDaysDifference(firstDate, secondDate) {
    const oneDay = 24 * 60 * 60 * 1000; // horas*minutos*segundos*milisegundos
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

let year = Number(prompt("Put the year of the first date"));
let month = (Number(prompt("Put the month of the first date"))) - 1;
let day = Number(prompt("Put the day of the first date"));
let firstDate = new Date(year, month, day);

let year2 = Number(prompt("Put the year of the second date"));
let month2 = (Number(prompt("Put the month of the second date"))) - 1;
let day2 = Number(prompt("Put the day of the second date"));
let secondDate = new Date(year2, month2, day2);

console.log(`The difference is ${getDaysDifference(firstDate, secondDate)} days`);
