//Data Structures Exercise - Jack Massey//

//1a
const jedi = [];
//1b
jedi[0] = "Luke";
//1c 
jedi.push(`Obi-Wan Kenobi`);
//1d
jedi.unshift(`Yoda`);
//1e
console.log(jedi[1]); // Luke
//1f
jedi.pop()
//1g
jedi.shift()
console.log(jedi); // [ 'Luke' ]

//2a
const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`]
//2b
const imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`]
//2c
const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains); // [ 'Darth Vader', 'Darth Sidious', 'Darth Maul', 'Grand Moff Tarkin', 'Orson Krennic']
//2d
console.log(starWarsVillains.slice(0, 2)); // [ 'Darth Vader', 'Darth Sidious' ]

//3a
const droids = {astromech: "R2-D2", protocol: "C-3PO", assassin: "IG-88"}
//3b
console.log(droids[`astromech`]); // R2-D2
//3c
console.log(droids.protocol); // C-3PO
//3d
droids.assassin = `IG-11`

//Bonus//

//4
console.log(starWarsVillains[0][6]); // V

//5
console.log(starWarsVillains.slice(-4, -3)); // [ 'Darth Sidious' ]

//6a
const starWarsMovies = [
    {episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", episodeThree: "Revenge of the Sith"},
    {episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", episodeSix: "Return of the Jedi"},
    {episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi",  episodeNine: "The Rise of Skywalker"}
]
//6b
starWarsMovies.splice(1, 0, "Solo", "Rogue One")
