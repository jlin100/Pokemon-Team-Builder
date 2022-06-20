
const allPokemonContainer = document.getElementById("allPokemonContainer");

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


async function displayPokemon(pokemon) {
    const name = pokemon.name.toUpperCase()[0] + pokemon.name.slice(1);
    const id = `#${pokemon.id.toString().padStart(3, "0")}`;
    const type = `Type: ${(pokemon.type[0].toUpperCase() + pokemon.type.slice(1)).split(",")[0]}`;
    const height = `Height: ${pokemon.height}`
    const weight = `Weight: ${pokemon.weight}`
    
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
    
    const readMore = document.createElement("input")
    readMore.setAttribute("id", "readMore")
    readMore.setAttribute("type", "checkbox")
    const pokemonReadMore = document.createElement("div")
    pokemonReadMore.setAttribute("id", "pokemonReadMore" )

    const pokemonType = document.createElement("div");
    pokemonType.setAttribute("id", "pokemonType");
    pokemonType.innerHTML = type; 

    const pokemonHeight = document.createElement("div")
    pokemonHeight.setAttribute("id", "pokemonHeight")
    pokemonHeight.innerHTML = height;

    const pokemonWeight = document.createElement("div")
    pokemonWeight.setAttribute("id", "pokemonWeight")
    pokemonWeight.innerHTML = weight;

    const readMoreLabel = document.createElement("label");
    readMoreLabel.setAttribute("id", "label")
    readMoreLabel.textContent = "Read More"
    
    readMoreButton(readMore, pokemonType, pokemonHeight, pokemonWeight, pokemonContainer);

    highlightText(pokemonType, pokemonHeight, pokemonWeight);
    
    const allAddedPokemon = document.getElementById("allAddedPokemon")
    const addPokemon = document.createElement("div")
    addPokemon.setAttribute("id", "addPokemon")

    const removeBTN = document.createElement("button")
    removeBTN.setAttribute("id", "removeBTN")
    removeBTN.innerText = "-"
    
    const addPokemonImage = img.cloneNode(true)
    const addPokemonName = pokemonName.cloneNode(true)
    
    const addBTN = document.createElement("button")
    count = 0;
    addBTN.setAttribute("id", "addBTN")
    addBTN.innerText = "+"
    
    removeCard(removeBTN, allAddedPokemon, addBTN);

    addCard(addBTN, addPokemon, allAddedPokemon, addPokemonImage, addPokemonName, removeBTN);

    pokemonContainer.append(addBTN, img, pokemonID, pokemonName, readMore, readMoreLabel);
    allPokemonContainer.appendChild(pokemonContainer);

    toggleColor();
} 

// function genrates all pokemon cards with a button
const generatePokemon = document.getElementById("btn")
function pokemonBTN(pokemon) {
    generatePokemon.addEventListener("click", () => {
        if(generatePokemon.checked) {
            displayPokemon(pokemon)
        }
    })
}

// function allows to switch the background color between light and dark mode
const colorSwitch = document.getElementById("inputColorSwitch");
const displayTitle = document.getElementById("displayTitle")
function toggleColor() {
    colorSwitch.addEventListener("change", () => {
        if(colorSwitch.checked) {
            darkModeOn();
            displayTitle.style.color = "rgba(255, 255, 255, 0.6)"
            allAddedPokemon.style.backgroundColor = "rgba(45, 45, 45, 0.6)"
        }
        else {
            darkModeOff();
            displayTitle.style.color = "rgb(0, 0, 0, 0.6)"
            allAddedPokemon.style.backgroundColor = "rgb(255, 255, 255, 0.6)"
        }
        
    })   
}
toggleColor();   

// turn on dark mode 
function darkModeOn() {
    document.body.classList.add("dark-mode");
}
// remove dark mode
function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

// drop down function to display more content
async function readMoreButton(readMore, pokemonType, pokemonHeight, pokemonWeight, pokemonContainer) {
    readMore.addEventListener("click", ( ) => {
        if (readMore.checked) {
            pokemonContainer.append(pokemonType, pokemonHeight, pokemonWeight);
        }else {
            pokemonContainer.removeChild(pokemonType);
            pokemonContainer.removeChild(pokemonHeight);
            pokemonContainer.removeChild(pokemonWeight); 
        }
    })

}

// highlight text when hover over 
async function highlightText(pokemonType, pokemonHeight, pokemonWeight) {
    pokemonType.addEventListener("mouseover", () => {
        pokemonType.style.color = "red"
    })
    pokemonType.addEventListener("mouseout", () => {
        pokemonType.style.color = "rgb(134, 134, 134)"
    })
    
    pokemonHeight.addEventListener("mouseover", () => {
        pokemonHeight.style.color = "red"
    })
    pokemonHeight.addEventListener("mouseout", () => {
        pokemonHeight.style.color = "rgb(134, 134, 134)"
    })
    pokemonWeight.addEventListener("mouseover", () => {
        pokemonWeight.style.color = "red"
    })
    pokemonWeight.addEventListener("mouseout", () => {
        pokemonWeight.style.color = "rgb(134, 134, 134)"
    })
}

// button to remove card from team
async function removeCard(removeBTN, allAddedPokemon, addBTN) {
    removeBTN.addEventListener("click", () => {
        count -= 1;
        allAddedPokemon.removeChild(addPokemon)
        addBTN.disabled = false;
    }) 
}

// button to add card to team 
async function addCard(addBTN, addPokemon, allAddedPokemon, addPokemonImage, addPokemonName, removeBTN) {
    addBTN.addEventListener("click", () => {
        count += 1; 
        if (count <= 6) {
            addPokemon.append(addPokemonImage, addPokemonName, removeBTN,);
            allAddedPokemon.appendChild(addPokemon);
            addBTN.disabled = true;
        } else if (count = 7) {
            count = 6;
            alert ("Your team is full!")
        }
    })
}