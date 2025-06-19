
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//SPREAD OPERATOR Ex - glass break when fall down 

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Data selecting
console.log(Array.isArray("Mayank"))                   
console.log(Array.from("Mayank"))
console.log(Array.from({name: "Mayank"})) // interesting case for interveiw 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));