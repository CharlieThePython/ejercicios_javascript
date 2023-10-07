/*
1.Crear un Set de Pokémon:

Crea un conjunto (Set) llamado pokemonSet.
Agrega algunos nombres de Pokémon al conjunto.
Asegúrate de que no haya duplicados en el conjunto.
*/


//FUNCIONES

//Voy a hacer una funcion para añadir pokemons

/**
 * 
 * @returns string
 */
function pedirDatos(){
    let pideDatos= prompt("¿Quieres añadir el nombre de un pokemon? s= sí. n= no");
    return pideDatos;
}

//Esto es para incluir nombres de Pokemons

/**
 * 
 * @returns string
 */
function nombrePoke(){
    let nombrePoke= prompt("Añade el pokemon aqui");;
    return nombrePoke;
}

/**
 * 
 * @param {Set} setPoke 
 * @returns Set
 */
function addPokemon(setPoke){
    //Voy a utilizar recursividad
    if(pedirDatos() === "s"){
        setPokemon.add(nombrePoke());
        return addPokemon(setPoke); 
    }else{
        return setPoke;
    }

}

/**
 *  
 * @param {Set} setPoke 
 * @returns string
 */
function esPokemonCapturado(setPoke){

    if(setPoke.has(nombrePoke())){
        return "El pokemon se encuentra capturado";
    }else{
        return "El pokemon NO se encuentra capturado";
    }
}

/**
 * 
 * @param {Set} setPoke 
 * @returns Set
 */
function liberarPokemon(setPoke){
    
    alert("Esta funcion es para borrar pokemons")
    if(pedirDatos() === 's'){
        setPoke.delete(nombrePoke());
        return liberarPokemon(setPoke);
    }else{
        return setPoke;
    }
}


//FIN DE FUNCIONES


//Main del programa

//Creamos el set
const setPokemon= new Set(["Bulbasaur","Ivysaur","Venasaur"]);

//Debug
console.log(setPokemon);


//Switch con las funciones integradas

do{
    switch(comp=Number(prompt("1. Añadir Pokemon\n2. Verificar Pokemon\n3. Liberar Pokemon"))){
        case 1:
            //Llamamos a la función
            addPokemon(setPokemon);
            console.log(setPokemon);
            break;
        case 2:
            console.log(esPokemonCapturado(setPokemon));
            break;
        case 3:
            console.log(liberarPokemon(setPokemon))
            break;
        default:
            console.log("FIN DEL PROGRAMA");
    }
}while(comp >= 1 && comp <= 3);










