console.log("Hello World1");
try{
var y = 6 * 5;
}
catch(error){
      console.log(error);
}
finally{
      console.log("Finally block");
}
var sum = 5 * 5;
console.log("Hello World2");
console.log("Hello World3");
console.log("Hello World4");
console.log("Hello World5");



// var title = "I love JavaScript";
// let title2 = "I love JavaScript";
// const title3 = "I love JavaScript";
// title3 = "I hate JavaScript"; // TypeError: Assignment to constant variable.

// 3 types of Scopes
// global scope var
// local scope function{}
// block scope {}

// var xyz = 5;
// let abc = 10;


// if(true){
//       var x = 5;
//       let y = 10;
//       const z = 15;
// }
// console.log(x);

// function myFunction(){
//       var x = 5;
//       let y = 10;
//       const z = 15;
// }
// console.log(x); // ReferenceError: x is not defined




// string built-in methods
// var title = "I love JavaScript";

// console.log(title.toUpperCase()); // I LOVE JAVASCRIPT
// console.log(title.toLowerCase()); // i love javascript
// console.log(title.length); // 17
// console.log(title.charAt(0)); // I
// console.log(title.charAt(1)); //
// console.log(title.charAt(2)); // l
// console.log(title.charCodeAt(2))
// console.log(title.slice(7, 17)); // love
// console.log(title.slice(2)); // love JavaScript
// console.log(title.indexOf("love")); // 2
// console.log(title.indexOf("hate")); // -1
// console.log( title.replace("love", "like")); // I like JavaScript
// console.log(title.split(" ")); // ["I", "love", "JavaScript"]
// console.log(title.split("")); // ["I", " ", "l", "i", "k", "e", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// console.log(title.trim()); // I like JavaScript
// console.log(title.concat("!!!")); // I like JavaScript!!!
// console.log(title.repeat(2)); // I like JavaScriptI like JavaScript
// console.log(title.startsWith("I")); // true
// console.log(title.endsWith("I")); // false
// console.log(title.includes("like")); // true
// console.log(title.includes("hate")); // false
// console.log(title.search("like")); // 2
// console.log(title.search("hate")); // -1
// console.log(title.match(/like/g)); // ["like"]
// console.log(title.match(/hate/g)); // null
// // console.log(title.match(/like/g).length); // 1
// // console.log(title.match(/hate/g).length); // TypeError: Cannot read property 'length' of null



// var newTitle = ""
// for (var index = 0; index < title.length; index++) {
//       const char = title[index];
      
//       if(char == "l" && title[index + 3] == "e"){
//             newTitle += "hate";
//             index += 3;

//       }else {
//             newTitle += char;
//       }
      
// }

// console.log(newTitle); // I hate JavaScript

// // date built-in methods
// var date = new Date();
// console.log(date); // 2025-01-12T14:53:52.454Z
// console.log(date.getDate()); // 12
// console.log(date.getDay()); // 0
// console.log(date.getFullYear()); // 2025
// console.log(date.getHours()); // 19
// console.log(date.getMilliseconds()); // 454
// console.log(date.getMinutes()); // 53
// console.log(date.getMonth()); // 0
// console.log(date.getSeconds()); // 52
// console.log(date.getTime()); // 1748430832454
// console.log(date.getTimezoneOffset()); // -180
// console.log(date.getUTCDate()); // 12
// console.log(date.getUTCDay()); // 0
// // SET METHODS
// var date = new Date();
// console.log(date.getFullYear()); // 2024-01-12T14:53:52.454Z
// date.setFullYear(1998);
// console.log(date.getFullYear()); // 2023-01-12T14:53:52.454Z
// date.setMonth(11);
// console.log(date.getMonth()); // 11
// date.setDate(25);
// console.log(date.getDate()); // 25
// date.setHours(23);
// console.log(date.getHours()); // 23

// var formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(formattedDate); // 25/12/2023 23:53:52

// // Math built-in methods
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.abs(-5)); // 5

