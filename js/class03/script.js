
var userNumber = 11;
if(userNumber % 2 === 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}




var a = 10;
// console.log("Hello World before the block!");
var x = 10;
var y = 20;
var result = (2 - x > 5 * 2 && y < 15 % 2 || x == 10 && y == 20  + 10);
// falsy values
// false, 0, "", null, undefined, NaN
// Truthy values
// true, 1, " ", "abc", {}, []

// write a program use input number check if number is even show the console otherwise do nothing







// {
//     console.log("Hello World");
//     {
//         console.log("Hello World");
//         {
//             console.log("Hello World");
//             {
//                 console.log("Hello World");
//             }
//         }
//     }
// }

// {
//     console.log("Hello World");
// }





// Topics 
// 1. Variables
// 2. Data Types
//    1. Integer
//    2. Float
//    3. String
//    4. Boolean
//    5. Null
//    6. Undefined
//    7. Empty String
//    8. Not a Number
//    9. Infinity
//    10. Negative Infinity
// 3. Operators
    // 1. Arithmetic Operators
        // +, -, *, /, %, ++, --
        //  DMAS  => Division, Multiplication vs Addition, Subtraction
    // 2. Assignment Operators
        // =, +=, -=, *=, /=, %=
         var num = 10;
            num += 5 // num = num + 5
            num -= 5; // num = num - 5
            num *= 2; // num = num * 2
            num /= 2; // num = num / 2
            num %= 2; // num = num % 2
            // console.log(num); // 15

    // 3. Comparison Operators
        // ==, ===, !=, !==, >, <, >=, <=
        // var a = "20";
        // var b = 20;
        // var c = a !== b;
        // console.log(c);
        


    // 4. Logical Operators
        // &&, ||, !

      
        // 1. Logical AND (&&)
        //  T && T => T
        //  T && F => F
        //  F && T => F
        //  F && F => F
        
        // 2. Logical OR (||)
        //  T || T => T
        //  T || F => T
        //  F || T => T
        //  F || F => F

        // 3. Logical NOT (!)
        // !T => F
        var x = 10;
        var y = 20;
        // var result = !(2 - x > 5 * 2 && y < 15 % 2 || x == 10 && y == 20  + 10);
        // var result = !(2*2 != 5 && 10 < 15%5 -5 || 10 >= 10 && 3+17 <= 20);
        //  console.log(result);

    // 5. Ternary Operator
        // ?:
        // var abc = "Ali";
        // var result = 2 + 2 >= 4 ? abc : 20;
        // console.log(result);


        // Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
        // var tempInCelsius = 100;
        // var tempInFahrenheit = tempInCelsius * 9/5 + 32;
    

    // 6. Bitwise Operators
        // &, |, ~, ^, <<, >>
    