// write a program that find even number 
// between 1-100 number and show the total sum of even number


var count = 1;
var sum = 0;
while(count <= 100){
    if(count % 2 == 0){
        sum = sum + count;
    }
    count++;
}
console.log("Total sum of even number is: ", sum);




// write a program that draw the table of 2
// var count = 1;
// while(count <= 10){
//     console.log(`5 * ${count} = ${5 * count}`);
//     count++;;
// }

// loop
// intialization
// condition
// increment/decrement








var userInput = 0;
//write a program that take user input and check if even number and if number is more than 50 add 10 in that number otherwise show only number is even
if (userInput % 2 == 0) {
    if (userInput > 50) {
        // console.log(userInput + 10);
    }
    else {
        // console.log("Number is even");
    }

}else {
    console.log("Number is odd");
}


//write a program that take user input and check if even number if so add 20 in that number and show the console 
// console.log(typeof userInput);
if (userInput % 2 == 0) {
    var result = userInput + 20
    // var result = parseInt(userInput) + 20
    // console.log(result)
}


// write a program that take user input 1,2,3,4,5,6,7 and show the day of the week
// switch(userInput){
//     // userInput == 1
//     case "1":{
//         console.log("Monday");
//         break;
//     }
//     case "2":{
//         console.log("Tuesday");
//         break;
//     }
//     case "3":{
//         console.log("Wednesday");
//         break;
//     }
//     case "4":{
//         console.log("Thursday");
//         break;
//     }
//     case "5":{
//         console.log("Friday");
//         break;
//     }
//     case "6":{
//         console.log("Saturday");
//         break;
//     }
//     case "7":{
//         console.log("Sunday");
//         break;
//     }
//     default:{
//         console.log("Invalid input");
//     }


// }

// write a program that take user marks and print the grade of the student A,B,C,F
// if(userInput >= 80 && userInput <= 100){
//     console.log("Grade A");
// }
// else if(userInput >= 70 && userInput < 80){
//     console.log("Grade B");
// }
// else if(userInput >= 60  && userInput < 70){
//     console.log("Grade C");
// }
// else if(userInput >= 0 && userInput < 60){
//     console.log("Grade F");
// }
// else{
//     console.log("Invalid marks");
// }


// if(userInput == 0){
//     console.log("Number is zero");
// }
// else if(userInput % 2 == 0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
// }