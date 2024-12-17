const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
//console.dir(pokemon, { maxArrayLength: null })

console.log(pokemon[58]); // Pokémon from index 50 to 59

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard".
*/

game.difficulty = "Medium";

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
*/

const starterPokemon = pokemon.find(p => p.starter === true);
game.party.push(starterPokemon);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection.
*/

const morePokemon = pokemon.filter(p => p.type.includes("Water")).slice(0, 3);
game.party.push(...morePokemon);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) gym.completed = true;
});
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier.
*/

const evolutionMap = { 1: 2, 4: 5, 7: 8, 25: 26 };
const evolvedPokemon = pokemon.find(p => p.id === evolutionMap[starterPokemon.id]);
game.party.splice(0, 1, evolvedPokemon);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
*/

game.party.forEach(p => console.log(p.name));

/*
Exercise 9
1. Print out all the starter Pokémon from the `pokemon` array.
*/

pokemon.filter(p => p.starter).forEach(p => console.log(p.name));

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object.
*/

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Example Call
game.catchPokemon(pokemon[10]); // Catch a Pokémon

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object.
*/

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Example Call
game.catchPokemon(pokemon[10]); // Catch a Pokémon

/*
Exercise 11
Modify `catchPokemon` to decrease the number of pokeballs.
*/

game.catchPokemon = function(pokemonObj) {
  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) pokeball.quantity--;
  this.party.push(pokemonObj);
};

// Example Call
game.catchPokemon(pokemon[12]);
console.log(game.items);

/*
Exercise 12
1. Complete gyms with a difficulty below 6.
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) gym.completed = true;
});

/*
Exercise 13
1. Create a `gymStatus` method to tally completed and incomplete gyms.
*/

game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  });
  console.log(gymTally);
};

// Example Call
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game`.
*/

game.partyCount = function() {
  return this.party.length;
};

// Example Call
console.log(game.partyCount());

/*
Exercise 15
1. Complete gyms with a difficulty below 8.
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) gym.completed = true;
});

/*
Exercise 16
1. Log the entire `game` object.
*/

console.log(game);
