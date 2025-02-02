// var userNames = ['John', 'Jane', 'Jack', 'Jill'];
// // list of js loops
// var index = 0;
// while (index < 4) {
//   console.log("while",userNames[index]);
// index++;  
// }
// index = 0;
// do {
//   console.log("do while",userNames[index]);
//   index++;
// }while(index < 4);

// for (var i = 0; i < 4; i++) {
//   console.log("for",userNames[i]);
// }




// function printName(a, b,c) {
//       console.log("filter",a, b,c);
//       return a * 2
      
// }
// var userNames = [4,2, 3, 6, 1];
// var result = userNames.forEach(printName);
// var result = userNames.map(printName);
// var result = userNames.filter(printName);

// console.log("result",result);

// let car = {
//       make: 'Toyota',
//       model: 'Camry',
//       year: 2020
// }
// for (const key in car) {
//             // const element = car[key];
//             console.log( car[key]);    
      
// }

// for (const element of userNames) {
//       console.log(element);
// }



var userNames = ['John', 'Jane', 'Jack', 'Jill'];
// annonymous function
// (function (element) {
//       console.log(element);
// })(" I am annonymous function");

// arrow function
const printName = (a,b,c)=>{
      console.log("I am arrow function",a,b,c);
      
}



userNames.forEach((a,b,c)=>{
      console.log("I am arrow function",a,b,c);
      
});

