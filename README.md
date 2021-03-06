# Pokemon Team Builder
This is a simple website that utilizes the [PokeAPI](https://pokeapi.co/) and allows you to review all 151 pokemon from the 1st generation. You are able to select and add each indiviudal pokemon and build a team based on your style and personality.

You can visit the live Pokemon Team Builder here: [Pokemon Team Builder](https://jlin100.github.io/Pokemon-Team-Builder/)

You can also [watch a short walkthrough](https://drive.google.com/file/d/1DRRzfkXMJYoUQdaywzOx9gVjSUl6aR06/view?usp=sharing) of the project 

## Get Your Own Copy
To create your copy of this project:
1. Fork this repo
2. Click the green "Code" button at the top right and copy the link
3. In your Terminal, navigate to the directory in where you want to clone the repo
4. Type `git clone <copied-link>` and hit enter
5. Type `cd Pokemon Team Builder` and hit enter
6. Run `open index.html` (if on Windows, navigate to the index.html in your File Explorer and open the file in your browser)

## Features
* Expolore all 151 pokemon from the first generation
* Dropdown option to learn more about each individual pokemon
  * Information includes: Type, Height, and etc
* The plus button can add each pokemon to the top of the page to create a customized team. 
  * The amount of pokemon that can be added to the team is limited to 6. An error message will pop-up once the maximum number of pokemon added has been reached
  * Each pokemon can only be added once. The plus button will be disabled once the pokemon has been added to the team 
* The minus buttons can remove the pokemon that is no longer been considered on the team
  * Once the pokemon has been removed from the team, the plus button will be enabled to allow the pokemon to be added on the team again
* A toggle button to switch between light/dark mode

* ## Resources Used
* Built with HTML, CSS, and JavaScript
* Used [PokeAPI](https://pokeapi.co/) to fetch data on each Pokemon's information