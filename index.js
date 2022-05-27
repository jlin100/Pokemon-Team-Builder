
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
            
            searchBar(pokemon)
            pokemonBTN(pokemon);
        })    
        
    }    
}    
fetchPokemon();

function searchBar(pokemon) {
    const filterArray = [];
    const search = document.getElementById("search")
    
    search.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase()
        const pokemonArray = Object.values(pokemon)
        const grabName = pokemonArray[0]

        if (!filterArray.includes(grabName))
        filterArray.push(grabName)
        
        const filterPokemon = filterArray.filter(pokemon => {
                return (grabName.includes(value));
            })
        displayPokemon(pokemon)
        console.log(filterPokemon)
        
    })
} 




const allPokemonContainer = document.getElementById("allPokemonContainer");

function displayPokemon(pokemon) {
    const name = pokemon.name.toUpperCase()[0] + pokemon.name.slice(1);
    const id = `#${pokemon.id.toString().padStart(3, "0")}`;
    const type = (pokemon.type[0].toUpperCase() + pokemon.type.slice(1)).split(",")[0];
    
    const pokemonContainer = document.createElement("div")
    pokemonContainer.setAttribute("id", "pokemonContainer")
    
    const img = document.createElement("img");
    img.setAttribute("id", "pokemonImage");
    img.src = pokemon.image;
    
    const pokemonID = document.createElement("div");
    pokemonID.setAttribute("id", "pokemonID");
    pokemonID.innerHTML = id;
    
    const pokemonName = document.createElement("div");
    pokemonName.setAttribute("id", "pokemonName");
    pokemonName.innerHTML = name;
    
    const pokemonType = document.createElement("div");
    pokemonType.setAttribute("id", "pokemonType");
    pokemonType.innerHTML = type; 
    
    pokemonContainer.append(img, pokemonID, pokemonName, pokemonType);
    allPokemonContainer.appendChild(pokemonContainer);
    
}

const colorSwitch = document.getElementById("inputColorSwitch");

function toggleColor() {
        colorSwitch.addEventListener("change", () => {
            if(colorSwitch.checked) {
                darkModeOn();
            }
            else {
                darkModeOff();
            }

    })   
}
 toggleColor();   

 function darkModeOn() {
     document.body.classList.add("dark-mode");
 }

 function darkModeOff() {
    document.body.classList.remove("dark-mode");
 }

 
 const generatePokemon = document.getElementById("btn")

 function pokemonBTN(pokemon) {
     generatePokemon.addEventListener("click", () => {
          displayPokemon(pokemon)
     })
 }