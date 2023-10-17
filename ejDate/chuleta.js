let fecha= new Date();
console.log(fecha.getDate()); //Saca el día
//Los días de la semana están en un array
console.log(fecha.getDay()) //Saca el día de la semana. 0 = Domingo

//Los meses los guarda también del 0 al 11. Octubre es el 9
console.log(fecha.getMonth());

//Saca 123. El año desde el 1900
console.log(fecha.getYear())

//Saca 2023
console.log(fecha.getFullYear())

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.toString());

console.log(fecha.toDateString());

console.log(fecha.toLocaleString());

console.log(fecha.toLocaleDateString());

console.log(fecha.toLocaleTimeString());

//Te da en minutos la distancia hasta el meridiano de Greenwitch
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
//Todos los métodos con el UTC son del meridiano de Greenwitch

//Todos los segundos que han pasado desde el 1 de enero de 1970
console.log(Date.now());

let miCumple= new Date(2000,10,9);
console.log(miCumple);

console.log(`You are ${fecha.getFullYear()-miCumple.getFullYear()} years old`);

