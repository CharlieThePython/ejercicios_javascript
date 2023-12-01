
/**
 * @author Carlos Almira Perez
 * @description Hacer un formulario que convierta de grados centígrados a grados Fahrenheit.
 * Para ello deberé multiplicar por 9/5 y sumar 32.
 * Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.
 */


window.addEventListener("load",()=>{
    var cel= document.getElementById("cel");
    var fahr= document.getElementById("fahr");
    var celFahrButton= document.getElementById("botonEnviar");
    var fahrCelButton= document.getElementById("botonEnviar2");
    
    celFahrButton.addEventListener("click",()=>{
        let resultado = (cel.value*1.8)+32;
        fahr.value=resultado;
    });
    
    fahrCelButton.addEventListener("click",()=>{
        let resultado = (fahr.value-32)*(5/9);
        cel.value=resultado;
    });
})
