// if Statement 
/*
if (condition){

}
*/
//const isUserloggedIn = true 

//if (isUserloggedIn){}
/*
if ( 2 === 2 ){
    console.log("executed");
}

if ( 4 === 4 ){
    console.log("executed1");
}

2<=2// 2 less than 2 <
>= greater 
!= not equal
!== not equal to other no. 

 <, >, <=, >=, ==, !=, ===,!==
 */
 
 //++++++++++++++++CHECK IF ELSE PROBLEM FOR TEMPERATURE++++++++++++++++++++++

 /*
 const isUserloggedIn = true 
const temperature = 41

if ( temperature < 39 ){
    console.log("less than 50");

} else {
    console.log("temperature is greater than 50");
}

*/

// ******************* BLOCK SCOPE *************************

/*  +*+*+*+*+*+*+*+*+*+*+* 

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power} `);
} console.log(`User power: ${power} `);

if (score > 100) {
    var power = "fly"
    console.log(`User power: ${power} `);
}
console.log(`User power: ${power} `);
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power} `);
}

console.log(`User power: ${power} `);

*+*+*+*+*+*+*+*+*+*+*+*+*+* */

// ***************Short hand *************

// const balance = 1000
// // if (balance > 500) console.log("test"),console.log("test2"); such type of content not be written 

// if (balance > 500) 
//     console.log("test");
// console.log("test2");


// +++++++++++++Nesting +++++++++
 
/*
const balance = 500
if (balance  < 500 ){
    console.log("less than");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 550) {
    console.log("less than 550");
    } else {
        console.log("less than 1001");

    }*/


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// conditionr rendoring js 




