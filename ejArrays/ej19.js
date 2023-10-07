
/**
 * 
 * @param {string} cadena 
 * @returns 
 */
function invertirCadena(cadena){

    const cadenaInvertida =cadena.split('').reverse().join('');
    return cadenaInvertida;
}

const compararPalabras = (cadena) =>{
    if(isNaN(cadena) && typeof(cadena) === 'string'){
    //Funcion de invertir cadena
    const cadenaInvert= invertirCadena(cadena);
    
    //Ternaria que devuelve un true o un false
    return cadena===cadenaInvert ? true : false;
    } else{
        return console.log("No es un string");
    }


}


const cadenaOriginal = "ola";



console.log(compararPalabras(cadenaOriginal) ? "Es palindromo" : "No es palindromo");

/*Ejercicio 11: Mapear números.
Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
devolver un nuevo array con los resultados de la función aplicada a cada elemento.*/

const miArray= [1,2,3,4,5];

const miNuevoArray= miArray.map((numero) =>{numero*2});
console.log(miNuevoArray);