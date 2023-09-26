

//EJERCICIO 3: DEJAMOS SOLO LOS PARES DE UN ARRAY

/**
 * FUNCION QUE DEVUELVE UN ARRAY SOLO CON LOS PARES
 * @param {num} array 
 * @returns array
 */
/*
function soloPares(array){
    let j=-1;
    const arrayPares=[];
    for(let i=0;i<=array.length;i++){
        if(array[i]%2===0){
            j++;
            arrayPares[j]= array[i];
        }
    }
    return arrayPares;

}

const arrayNormal=[1,2,3,4,5,6,7,8];

const resultado=soloPares(arrayNormal);
console.log(resultado);*/



//OTRA FORMA DE DEJAR SOLO LOS PARES

const a1 = [1, 2, 3,4,5,6,7,8]; 

/**
 * Arrow Function con la función filter. Se toma un número como argumento y se comprueba
 */
const a3= a1.filter(numero => numero%2===0);
console.log(a3);
