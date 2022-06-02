
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
            pokemon["height"] = data.height
            pokemon["weight"] = data.weight
            
            pokemonBTN(pokemon);
        })    
        
    }    
}    
fetchPokemon();

const allPokemonContainer = document.getElementById("allPokemonContainer");

function displayPokemon(pokemon) {
    
    const name = pokemon.name.toUpperCase()[0] + pokemon.name.slice(1);
    const id = `#${pokemon.id.toString().padStart(3, "0")}`;
    const type = `Type: ${(pokemon.type[0].toUpperCase() + pokemon.type.slice(1)).split(",")[0]}`;
    const height = `Height: ${pokemon.height}`
    const weight = `Weight: ${pokemon.weight}`
    
    const pokemonContainer = document.createElement("div")
    pokemonContainer.setAttribute("id", "pokemonContainer")

    const pokemonReadMore = document.createElement("div")
    pokemonReadMore.setAttribute("id", "pokemonReadMore" )
    
    // const likeButton = document.createElement("button")
    // likeButton.setAttribute("id", "likeButton")
    
    const img = document.createElement("img");
    img.setAttribute("id", "pokemonImage");
    img.src = pokemon.image;
    
    const pokemonID = document.createElement("div");
    pokemonID.setAttribute("id", "pokemonID");
    pokemonID.innerHTML = id;
    
    const pokemonName = document.createElement("div");
    pokemonName.setAttribute("id", "pokemonName");
    pokemonName.innerHTML = name;
    
    let elementClicked = true;
    const readMore = document.createElement("button")
    readMore.setAttribute("id", "readMore")
    readMore.innerText = "Read More"
    readMore.addEventListener("click", (e) => {
 
        if (elementClicked) {
            pokemonContainer.append(pokemonType, pokemonHeight, pokemonWeight);
            readMore.innerText = "Read Less"
            document.getElementById("pokemonType").style.visibility = 'visible';
            document.getElementById("pokemonHeight").style.visibility = 'visible';
            document.getElementById("pokemonWeight").style.visibility = 'visible';
        }else {
            // pokemonContainer.removeChild(pokemonType);
            // pokemonContainer.removeChild(pokemonHeight);
            // pokemonContainer.removeChild(pokemonWeight);
            
            readMore.innerText = "Read More"  
            document.getElementById("pokemonType").style.visibility = 'hidden';
            document.getElementById("pokemonHeight").style.visibility = 'hidden';
            document.getElementById("pokemonWeight").style.visibility = 'hidden';
        }
        // elementClicked = false
    })

    const pokemonType = document.createElement("div");
    pokemonType.setAttribute("id", "pokemonType");
    pokemonType.innerHTML = type; 
    
    const pokemonHeight = document.createElement("div")
    pokemonHeight.setAttribute("id", "pokemonHeight")
    pokemonHeight.innerHTML = height;
    
    const pokemonWeight = document.createElement("div")
    pokemonWeight.setAttribute("id", "pokemonWeight")
    pokemonWeight.innerHTML = weight;
    
    pokemonContainer.append(img, pokemonID, pokemonName, readMore);
    // pokemonReadMore.append(pokemonType, pokemonHeight, pokemonWeight)
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
        if(generatePokemon.checked) {
            displayPokemon(pokemon)
        }
    })
}




// const filterArray = [];
// const nameOfPokemon = [];
// const search = document.getElementById("search")

// const name = pokemonArray.toUpperCase()[0] + pokemonArray.slice(1);

// search.addEventListener("input", (e) => {
    //     const value = e.target.value.toLowerCase()
    // const pokemonArray = pokemon.name.includes(value)
    // console.log(pokemonArray)
        // const pokemonArray = Object.values(pokemon)
        // let name = pokemonArray[0]
        // if (!filterArray.includes(name))
        // filterArray.push(name)
        
        // const filterPokemon = filterArray.filter(pokemon => {
        //         return (name.includes(value));
        //     })
        // nameOfPokemon.push(filterPokemon)
        // console.log(nameOfPokemon)
        // })

