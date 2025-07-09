// ++++++++++++++++++++++++++++forin loop+++++++++++++++++++++

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(myObject[key]);
    /* OUTPUT 
    javascript
    C++
    ruby
    swift by apple
    */
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]); //js, rb, py, java, cpp
//    console.log(key); // 1, 2, 3, 4, 5
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // no any output is form

// }