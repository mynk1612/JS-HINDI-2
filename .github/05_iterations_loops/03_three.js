// for of 

// ["", "", ""]  string 
// [{}, {}, {}] object 

const arr = [1, 2, 3, 4, 5]

for (const num of object) { // num = iterator , this is a forof loop 
    
    console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)

}

// +++++++++++++ MAPS ++++++++++++++++++++++++++
 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
//map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {

    //console.log(key, ':-', value);  // output show = IN :- India 

}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


 