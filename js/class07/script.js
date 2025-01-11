// write a program to that convert the array value multiply by two on even index
// e.g [10,12,13,14,15] => [20,12,26,14,30]
// write a program to that convert
//  the array value modulas of that index value on oddindex


var nums = [10, 12, 13, 14, 15];
for (var i = 0; i < nums.length; i++) {
 if(i % 2 == 0){
    nums[i] = nums[i] * 2;
 }
}

console.log(nums);




// var names = ['umar', 'Usman', 'khan', 'Naveed'];
// for (var i = 0; i < 4; i++) { 
//     console.log(names[i]);
//  }

// names.push('Abu bakar')clear
// names.push('Usman')
// names.unshift('Muhammad', 'Ali')
// names.pop()
// names.pop()
// names.shift()
// console.log(names);