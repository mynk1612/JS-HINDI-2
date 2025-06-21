//console.log("M");


function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

// sayMyName ()

//function addTwoNumbers(number1, Number2){ // Parameters 
//    console.log(number1 + Number2);
//}

//addTwoNumbers(3, "a") // function call whatever value is given to call cld as argument 

//addTwoNumbers(3, null)


function addTwoNumbers(number1, number2){

   // let result = number1 + number2
   // return result 

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: " , result);


//**************login user *******

function loginUserMessage(username){
    if(username === undefined){
    console.log("Please enter a username");
    return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mayank"))
console.log(loginUserMessage())
