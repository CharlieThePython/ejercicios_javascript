/*
Ejercicio 4: Dada una fecha, calcular el número de días restantes hasta la próxima Navidad.
*/

function daysForChristmas(){
    let actualDate= new Date();
    return actualDate.getDate();
}


console.log(`${ daysForChristmas()} until Christmas`);