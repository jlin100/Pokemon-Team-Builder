const pokemonContainer = document.querySelector("[data-pokemon-container]");

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
            
            displayPokemon(pokemon);
        })
        
    }
}
fetchPokemon();

function displayPokemon(pokemon) {
    // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = `#${pokemon.id.toString().padStart(3, "0")}`;
    // const type = (pokemon.type[0].toUpperCase() + pokemon.type.slice(1)).split(",")[0];

    const pokemonID = document.getElementById("pokeid")
    pokemonID.innerHTML = id;
    document.body.appendChild(pokemonID);


    // const pokemonID = document.createElement("div");
    // pokemonID.setAttribute("id", "id");
    // pokemonID.innerHTML = id;
    // document.appendChild(pokemonID);

    // const img = document.createElement("img");
    // img.setAttribute("id", "pokemonImage");
    // img.src = pokemon.image;
    // document.body.appendChild(img);
    
    // const pokemonName = document.createElement("div");
    // pokemonName.setAttribute("id", "pokemonName");
    // pokemonName.innerHTML = name;
    // document.body.appendChild(pokemonName);

    // const pokemonType = document.createElement("div");
    // pokemonType.setAttribute("id", "pokemonType");
    // pokemonType.innerHTML = type;
    // document.body.appendChild(pokemonType);  

}

// const pokemonCardTemplate = document.getElementById("dataPokemonTemplate")

// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(data => {
//             const card = pokemonCardTemplate.content.cloneNode(True).children[0];
//             const id = card.querySelector("[data-id");
//             const name = card.querySelector("[data-name");
//             id.textContent = data.id;
//             name.textContent = data.name;
//         })
//     })

