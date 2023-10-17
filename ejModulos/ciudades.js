//FUNCIONES

/**
 * 
 * @param {array} temperaturas 
 * @returns Number
 */
function temperaturaMedia(temperaturas){
    let tempTotal=0;
    for (const mes in temperaturas) {
    tempTotal = tempTotal + temperaturas[mes].temperaturaMaxima+temperaturas[mes].temperaturaMinima;
}

tempTotal=(tempTotal/(Object.keys(temperaturas).length*2)).toFixed(2);
return tempTotal;
}




//ARRAY DE OBJETOS
const temperaturasCiudades = [
    {
        ciudad: "Granada",
        meses: {
            enero: { temperaturaMaxima: 15, temperaturaMinima: 5 },
            febrero: { temperaturaMaxima: 18, temperaturaMinima: 7 },
            marzo: { temperaturaMaxima: 20, temperaturaMinima: 8 },
        },
    },
    {
        ciudad: "Jaén",
        meses: {
            enero: { temperaturaMaxima: 17, temperaturaMinima: 6 },
            febrero: { temperaturaMaxima: 20, temperaturaMinima: 8 },
            marzo: { temperaturaMaxima: 22, temperaturaMinima: 10 },
        },
    },
    {
        ciudad: "Málaga",
        meses: {
            enero: { temperaturaMaxima: 20, temperaturaMinima: 11 },
            febrero: { temperaturaMaxima: 22, temperaturaMinima: 12 },
            marzo: { temperaturaMaxima: 24, temperaturaMinima: 14 },
        },
    },
];

const [{ meses: granadaMeses }, { meses: jaenMeses }, { meses: malagaMeses }] = temperaturasCiudades;

//OUTPUT    
console.log(`La temperatura media de Granada es ${temperaturaMedia(granadaMeses)}`);
console.log(`La temperatura media de Jaen es ${temperaturaMedia(jaenMeses)}`);
console.log(`La temperatura media de Málaga es ${temperaturaMedia(malagaMeses)}`);
