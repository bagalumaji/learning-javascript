
// length - Returns the number of elements in an array.
// pop() - Removes the last element from an array and returns it.
// shift() - Removes the first element from an array and returns it.
// push() - Adds one or more elements to the end of an array and returns the new length of the array.
// unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// concat() - Combines multiple arrays into a single array.

const nums = [2,1,3,4,6,5];

//print the length of the array

console.log("Length of array : ",nums.length);

// print the all elements of the array
console.log(nums);

// add element at the end of the array
nums.push(7);
console.log(nums);

//add element at the beginning of the array
nums.unshift(8);
console.log(nums);

// remove element at the end of the array
let ele = nums.pop();
console.log("removed element ",ele);

// remove element at the beginning of the array
ele = nums.shift()
console.log("removed element ",ele);

const b = [8,9,6];

// concat() - Combines multiple arrays into a single array.
const arrJoined = nums.concat(b);
console.log(arrJoined)

