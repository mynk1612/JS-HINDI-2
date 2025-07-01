// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);

})();
// global scope ke 

(function aurcode(name ) {

    console.log(`DB CONNECTED TWO ${name}`); // varaible name

})('mayank');

( (name ) => {
    
    console.log(`DB CONNECTED TWO ${name}`); // varaible name

})('mayank')