
/**
 * @author Carlos Almira Perez
 * @description Ejercicio para convertir de euros a dólares y viceversa
 */


window.addEventListener("load",()=>{
    var euro= document.getElementById("euros");
    var dolar= document.getElementById("dolars");
    var euroDolarButton= document.getElementById("botonEnviar");
    var dolarEuroButton= document.getElementById("botonEnviar2");
    
    euroDolarButton.addEventListener("click",()=>{
        let resultado = euro.value*2
        dolar.value=resultado;
    });
    
    dolarEuroButton.addEventListener("click",()=>{
        let resultado = dolar.value/2;
        euro.value=resultado;
    });
})
