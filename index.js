
async function fetchPokemon() {
        for(let i = 1; i <= 151; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
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

function displayPokemon(pokemon) {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const type = (pokemon.type[0].toUpperCase() + pokemon.type.slice(1)).split(",")[0];

    const img = document.createElement("img");
    img.src = pokemon.image;
    document.body.append(img)

    const pokemonID = document.createElement("div");
    pokemonID.innerHTML = id;
    document.body.append(pokemonID);

    const pokemonName = document.createElement("div");
    pokemonName.innerHTML = name;
    document.body.append(pokemonName)

    const pokemonType = document.createElement("div");
    pokemonType.innerHTML = type;
    document.body.append(pokemonType);
    
}

fetchPokemon();