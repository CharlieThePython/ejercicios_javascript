/*
Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores
(temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los
valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son
números para realizar la suma.
*/


/**
 * 
 * @param {Object} object 
 * @returns Number (Float) 
 */
function sumTemperatures(object){
    let sum=0;
    const myArray= Object.values(object);

    for(grade of myArray){
        if(typeof grade === 'number' && !isNaN(grade)){
            sum=sum+grade;
        }else{
            continue;
        }
}
return (sum/12).toFixed(2); //Este método limita el número de decimales
}

//Main Program
const gradesPerMonth={
    january: 12,
    february: "hola",
    march: "adios",
    april: 20,
    may: 21,
    june: 28,
    july: 31,
    august: 34,
    september: 25,
    october: 20,
    november: 14,
    december: 9,
}

console.log(`La temperatura media es ${sumTemperatures(gradesPerMonth)}`);