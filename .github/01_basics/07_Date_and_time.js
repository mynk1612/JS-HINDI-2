// Dates  

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocalString ());
console.log(typeof my Date()

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2002")

//console.log(myCreatedDay.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
  weekday: "long",
  //timeZone: ''
  }
)