
function fetchPokemon() {
        for(let i = 1; i <= 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then( data => {
            const pokemon = {};
            pokemon["name"] = data.name;
            pokemon["id"] = data.id;
            pokemon["image"] = data.sprites.other["official-artwork"].front_default;
            pokemon["type"] = data.types
            .map((type) => type.type.name)
            .join(", ")
            console.log(pokemon)
            displayPokemon(pokemon);
        })
        
    }
}

const pokedex = document.getElementById("pokedex")

function displayPokemon(pokemon) {
    const pokemonHTML = pokemon
    .map((pokemon) => 
    pokemon.image,
    pokemon.id,
    pokemon.name,
    pokemon.type
    ).join(" ");
    pokedex.innerHTML = pokemonHTML;
}

fetchPokemon();