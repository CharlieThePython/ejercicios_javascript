const pikachu={
    name:"pikachu",
    type:"electric",
    level:12,
}

const charmander={
    name:"charmander",
    type:"fire",
    level:3,
}

const bulbasaur={
    name:"bulbasaur",
    type:"grass",
    level:15,
}
export const miPokedex={pikachu,charmander,bulbasaur};

export function higherLevel() {
    let stronger = 0;
    let strongestPokemon = null;

    for (const pokemonKey in miPokedex) {
        const pokemon = miPokedex[pokemonKey];
        if (pokemon.level > stronger) {
            stronger = pokemon.level;
            strongestPokemon = pokemon;
        }
    }

    return strongestPokemon;
}