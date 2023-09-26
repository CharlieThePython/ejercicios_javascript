

function eliminarDuplicados(arr){

    const setSinDuplicados = new Set(arr);
    const arrSinDuplicados= [...setSinDuplicados]
    return arrSinDuplicados;

}

const array4=[1,2,3,1,5,6,7,1,2];

const nuevoArray=eliminarDuplicados(array4);

console.log(nuevoArray);