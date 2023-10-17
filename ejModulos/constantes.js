export const PI= Math.PI;

export let usuario="Charlie";
export let password="qwerty";

//Solo puede haber un módulo exportado por defecto
export default function saludar(){
    console.log("Hola desde el módulo");
}