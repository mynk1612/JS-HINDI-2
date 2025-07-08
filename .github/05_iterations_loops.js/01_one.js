// for 

// for (let i = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }
for (let i = 0; i < 10; i++) {
    const element = i;

    if(element == 5) {
        console.log("5 is best number");
    }
    console.log(element);

}
// console.log(element);

for (let i = 0; i < array.length; i++) {
    //console.log(`Outer loop value: ${i}`);
    for ( let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j );
    }
      
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let index = 0; index <= array.length; index++) { // undefined  when index++ not in code a very big pblm come it stay on flash 
    for (let index = 0; index <  array.length; index++) {
    const element = array[index];
    
  //  console.log(element);

}


// break and continue 

//  ****************BREAK************** 

// for (let index = 1; index <= 20 ; index++) {

//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// } 
//  through  this code its show output from 1-5 


//    **************CONTINUE*****************
for (let index = 1; index <= 20 ; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        continue 
    }**