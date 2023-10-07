/*
Ejercicio 1
Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea
pais. Si no existiese dicha clave devolvería : "No se encuentra"
*/

function devuelvePais(objeto){
    if(objeto.pais){
        return objeto.pais;
    }else{
        return "No se encuentra"
    }
}

const paises={
    continente: "Europa",
    pais: "España",
}

console.log(devuelvePais(paises));