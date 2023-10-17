/*
Ejercicio 3: Crear una función que devuelva el nombre del día de la semana para una fecha específica.
*/

function getDate(bornDate){
    switch(bornDate.getDay()){
    case 0:
        return "Sunday";
    case 1:
        return "Monday";
    case 2:
        return "Tuesday";
    case 3:
        return "Wednesday";
    case 4:
        return "Thursday";
    case 5:
        return "Friday";
    case 6:
        return "Saturday";
    }
}

let year=Number(prompt("Put the year you were born"));
let month=(Number(prompt("Put the month you were born")))-1;
let day=Number(prompt("Put the day you were born"));
let bornDate= new Date(year,month,day);
console.log(`It was a ${getDate(bornDate)}`);