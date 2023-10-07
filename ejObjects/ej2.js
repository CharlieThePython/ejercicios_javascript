/*
Escribe una función que tome un objeto (a) y una cadena (b) como argumento
Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
*/

function existePropiedad(objeto,cadena){
    if(objeto.hasOwnProperty(cadena)){
        return true;
    }else{
        return false;
    }
    
}

let myString = "pais";

const paises={
    continente: "Europa",
    pais: "España",
}



console.log(existePropiedad(paises,myString));