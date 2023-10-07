//JUEGUITO DE ADIVINAR EL NÚMERO

/*
Pasos a seguir:
1. Definir un número aleatorio del 1 al 100
2. Hacer funcion que pida entrada de datos
    2.1. ¿Acierta? El programa termina y se le felicita
    2.2. ¿Falla? Se vuelve a ejecutar el bucle y se le dice si es mayor o menor
3. Hacer funcion que mide si el número es mayor o menor y que devuelva un string con un return

*/

/**
 * 
 * @param {number} numeroIntroducido 
 * @param {number} numeroAzar 
 * @returns string 
 */
function compararNumeros(numeroIntroducido,numeroAzar) {
    const arrayResultados = ["Tu número es menor que el original", "Tu número es mayor que el original", "win"];

    let resultado = (numeroIntroducido < numeroAzar)
        ? arrayResultados[0]
        : (numeroIntroducido > numeroAzar)
            ? arrayResultados[1]
            : (numeroIntroducido === numeroAzar)
                ? arrayResultados[2]
                : "Algo salió mal";

    return resultado;
}

/**
 * 
 * @param {number} numeroAzar 
 * @returns string
 */
function pideNumero(numeroAzar) {
    let comparacion;
    do{
        let numeroIntroducido = Number(prompt("Introduce un número:\n"))
        comparacion= compararNumeros(numeroIntroducido,numeroAzar);
        if(comparacion !== "win"){
           console.log(comparacion);
        }

    }while(comparacion !== "win")
    
    return "Felicidades, has ganado! :D";
    
}

const numeroAzar = Math.floor(Math.random() * 101 - 1);

//Debug del número
console.log(numeroAzar);

const compruebaNumero=pideNumero(numeroAzar);

//Impresión de resultados
console.log(compruebaNumero);