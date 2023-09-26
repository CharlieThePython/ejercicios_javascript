



/**EJ1: SUMA DE ARRAYS QUE DEVUELVE UN NUEVO ARRAY CON LOS ELEMENTOS SUMADOR DE ARR1 Y ARR2
 * 
 * @param {num} arr1 
 * @param {num} arr2 
 * @returns array
 */
function sumaArrays(arr1,arr2) {
    const array3 = arr1.map((num,i) => num + arr2[i]);
    return array3;
  }
  
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayFinal = sumaArrays(array1, array2);
console.log(arrayFinal);


